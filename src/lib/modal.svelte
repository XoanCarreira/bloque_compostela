<script>
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();

	/** Props */
	export let open = false; // bind:open desde la página
	export let images = []; // array de { full, alt }
	export let index = 0; // índice inicial (bind:index opcional)

	// estado interno
	let current = index;
	let scale = 1;
	let translate = { x: 0, y: 0 };
	let dragging = false;
	let lastPointer = null;

	// referencias DOM
	let imgEl;
	let containerEl;

	// sincronizar index entrante
	$: if (index !== current) index = current;

	function close() {
		dispatch('close');
	}

	function prev() {
		if (current > 0) {
			current -= 1;
			resetTransform();
			dispatch('change', { index: current });
		}
	}

	function next() {
		if (current < images.length - 1) {
			current += 1;
			resetTransform();
			dispatch('change', { index: current });
		}
	}

	function resetTransform() {
		scale = 1;
		translate = { x: 0, y: 0 };
	}

	// teclado
	function onKey(e) {
		if (!open) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
		if (e.key === '+' || e.key === '=') zoomIn();
		if (e.key === '-') zoomOut();
	}

	// zoom control
	function zoomIn() {
		scale = Math.min(scale + 0.25, 4);
	}
	function zoomOut() {
		scale = Math.max(scale - 0.25, 1);
	}

	// rueda del ratón para zoom
	function onWheel(e) {
		if (!open) return;
		if (e.ctrlKey || e.metaKey) {
			e.preventDefault();
			scale = Math.max(1, Math.min(4, scale - Math.sign(e.deltaY) * 0.1));
		}
	}

	// pointer events para arrastrar la imagen cuando está ampliada
	function onPointerDown(e) {
		if (scale <= 1) return;
		dragging = true;
		lastPointer = { x: e.clientX, y: e.clientY };
		containerEl.setPointerCapture(e.pointerId);
	}

	function onPointerMove(e) {
		if (!dragging || !lastPointer) return;
		const dx = e.clientX - lastPointer.x;
		const dy = e.clientY - lastPointer.y;
		translate = { x: translate.x + dx, y: translate.y + dy };
		lastPointer = { x: e.clientX, y: e.clientY };
	}

	function onPointerUp(e) {
		dragging = false;
		lastPointer = null;
		try {
			containerEl.releasePointerCapture(e.pointerId);
		} catch {}
	}

	// doble click para reset/zoom
	function onDblClick() {
		if (scale === 1) scale = 2;
		else resetTransform();
	}

	// touch pinch (simple): detect two pointers and compute distance
	let pointers = new Map();
	function onPointerDownPinch(e) {
		pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pointers.size === 2) {
			// start pinch
		}
	}
	function onPointerMovePinch(e) {
		if (!pointers.has(e.pointerId)) return;
		pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pointers.size === 2) {
			const pts = Array.from(pointers.values());
			const dx = pts[0].x - pts[1].x;
			const dy = pts[0].y - pts[1].y;
			const dist = Math.hypot(dx, dy);
			if (typeof containerEl._pinchStartDist === 'undefined') {
				containerEl._pinchStartDist = dist;
				containerEl._pinchStartScale = scale;
			} else {
				const ratio = dist / containerEl._pinchStartDist;
				scale = Math.max(1, Math.min(4, containerEl._pinchStartScale * ratio));
			}
		}
	}
	function onPointerUpPinch(e) {
		pointers.delete(e.pointerId);
		if (pointers.size < 2) {
			delete containerEl._pinchStartDist;
			delete containerEl._pinchStartScale;
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', onKey);
			window.addEventListener('wheel', onWheel, { passive: false });
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', onKey);
			window.removeEventListener('wheel', onWheel);
		}
	});

	// sincronizar cambios de current al index externo (bind:index)
	$: current, (index = current);
</script>

{#if open}
	<div
		class="backdrop"
		role="dialog"
		aria-modal="true"
		aria-label="Visor de croquis"
		on:click|self={close}
	>
		<div
			class="modal"
			bind:this={containerEl}
			on:pointerdown={(e) => {
				onPointerDownPinch(e);
				onPointerDown(e);
			}}
			on:pointermove={(e) => {
				onPointerMovePinch(e);
				onPointerMove(e);
			}}
			on:pointerup={(e) => {
				onPointerUpPinch(e);
				onPointerUp(e);
			}}
			on:pointercancel={(e) => {
				onPointerUpPinch(e);
				onPointerUp(e);
			}}
			on:dblclick={onDblClick}
		>
			<button class="close" on:click={close} aria-label="Cerrar">✕</button>

			<div class="controls top">
				<button on:click={prev} disabled={current === 0} aria-label="Anterior">◀</button>
				<span class="counter">{current + 1} / {images.length}</span>
				<button on:click={next} disabled={current === images.length - 1} aria-label="Siguiente"
					>▶</button
				>
			</div>

			<div class="controls bottom">
				<button on:click={zoomOut} aria-label="Alejar">−</button>
				<button on:click={resetTransform} aria-label="Restablecer">⤢</button>
				<button on:click={zoomIn} aria-label="Acercar">+</button>
				<a class="open-new" href={images[current]?.full} target="_blank" rel="noopener"
					>Abrir en pestaña</a
				>
			</div>

			<div class="image-wrap" aria-hidden="false">
				{#if images[current]}
					<img
						bind:this={imgEl}
						src={images[current].full}
						alt={images[current].alt || ''}
						style="transform: translate({translate.x}px, {translate.y}px) scale({scale});"
						draggable="false"
					/>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.7);
		z-index: 1200;
		padding: 1rem;
	}
	.modal {
		position: relative;
		width: min(1200px, 96%);
		max-height: 96vh;
		background: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
	.image-wrap {
		width: 100%;
		height: calc(96vh - 120px);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 8px;
	}
	img {
		max-width: 100%;
		max-height: 100%;
		transition: transform 120ms ease;
		will-change: transform;
		user-select: none;
		-webkit-user-drag: none;
	}
	.close {
		position: absolute;
		top: -10px;
		right: -10px;
		z-index: 10;
		background: #fff;
		border: none;
		width: 36px;
		height: 36px;
		border-radius: 999px;
		cursor: pointer;
	}
	.controls {
		position: absolute;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		z-index: 11;
	}
	.controls.top {
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
	}
	.controls.bottom {
		bottom: 8px;
		left: 50%;
		transform: translateX(-50%);
	}
	.controls button {
		background: rgba(255, 255, 255, 0.95);
		border: none;
		padding: 0.4rem 0.6rem;
		border-radius: 6px;
		cursor: pointer;
	}
	.controls button[disabled] {
		opacity: 0.4;
		cursor: default;
	}
	.counter {
		background: rgba(0, 0, 0, 0.45);
		color: #fff;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		font-size: 0.9rem;
	}
	.open-new {
		background: rgba(255, 255, 255, 0.95);
		padding: 0.35rem 0.6rem;
		border-radius: 6px;
		text-decoration: none;
		color: inherit;
	}
	@media (max-width: 600px) {
		.image-wrap {
			height: calc(96vh - 160px);
		}
		.controls.top,
		.controls.bottom {
			gap: 0.25rem;
		}
	}
</style>
