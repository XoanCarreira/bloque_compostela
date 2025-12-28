<script>
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let src = '';
	export let alt = '';

	function close() {
		dispatch('close');
	}

	// cerrar con Escape
	function onKey(e) {
		if (e.key === 'Escape') close();
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', onKey);
			return () => window.removeEventListener('keydown', onKey);
		}
	});
</script>

{#if open}
    <div
        class="backdrop"
        role="dialog"
        tabindex="0"
        aria-modal="true"
        aria-label="Visor de imagen"
        on:click|self={close}
        on:keydown|self={(e) => e.key === 'Enter' && close()}
    >
        <div class="modal">
            <button class="close" on:click={close} aria-label="Cerrar">✕</button>
            <img {src} {alt} />
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
		background: rgba(0, 0, 0, 0.6);
		z-index: 1000;
		padding: 1rem;
	}
	.modal {
		max-width: 95%;
		max-height: 95%;
		position: relative;
	}
	.modal img {
		display: block;
		max-width: 100%;
		max-height: 80vh;
		border-radius: 8px;
	}
	.close {
		position: absolute;
		top: -10px;
		right: -10px;
		background: #fff;
		border-radius: 999px;
		border: 0;
		width: 36px;
		height: 36px;
		cursor: pointer;
		font-size: 16px;
	}
</style>
