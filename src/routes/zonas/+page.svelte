<script>
	export let data;
	import { onMount } from 'svelte';

	// Lóxica do carrusel 3D carga unha vez montado o compoñente
	onMount(() => {
		if (typeof window === 'undefined') return;

		// Selección de elementos
		const carousel = document.querySelector('.grid');
		const prevBtn = document.querySelector('#prevBtn');
		const nextBtn = document.querySelector('#nextBtn');
		let items = carousel ? Array.from(carousel.querySelectorAll('.card')) : [];

		if (!carousel || !items.length) return;

		// Clonar elementos para crear efecto infinito (dobre copia: diante e detrás)
		const originalItems = [...items];
		originalItems.forEach((item) => {
			const clone = item.cloneNode(true);
			carousel.appendChild(clone);
		});
		originalItems.forEach((item) => {
			const clone = item.cloneNode(true);
			carousel.insertBefore(clone, carousel.firstChild);
		});

		// Actualiza a lista de items cos orixinais + clonados
		items = Array.from(carousel.querySelectorAll('.card'));

		// Ancho dun bloque completo (unha volta) medido entre o inicio da copia 1 e o inicio da copia 2
		const setWidth = items[originalItems.length].offsetLeft - items[0].offsetLeft;
		const buffer = Math.min(120, setWidth * 0.25);

		// Parámetros de axuste visual copoñentes
		const minScale =
			parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--min-scale')) ||
			0.62;
		const maxScale =
			parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-scale')) || 1;
		const minOpacity =
			parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--min-opacity')) ||
			0.35;
		const maxOpacity =
			parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-opacity')) || 1;
		let ticking = false;
		let centralItem = null;
		let isResetting = false;
		const scrollAmount = 310; // Píxeles a desplazar con los botones

		// Variables para detectar dirección de scroll
		let lastScrollLeft = setWidth;

		// Función para actualizar transformación dos elementos
		function update() {
			const rect = carousel.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			let closestItem = null;
			let minDistance = Infinity;

			// Actualizar cada item
			items.forEach((item) => {
				const r = item.getBoundingClientRect();
				const itemCenter = r.left + r.width / 2;
				const distance = Math.abs(centerX - itemCenter);

				// Normalizar distancia: 0 (centro) -> 1 (muy lejos)
				const maxDist = rect.width / 2 + r.width;
				const norm = Math.min(distance / maxDist, 1);

				// Calcular ángulo basado en la distancia normalizada (-90 a 90 grados)
				const angle = norm * 60; // Máximo 60 grados de rotación
				const direction = itemCenter > centerX ? 1 : -1; // Dirección derecha o izquierda
				const rotationAngle = angle * direction;

				// Interpolar escala y opacidad
				const scale = maxScale - (maxScale - minScale) * norm;
				const opacity = maxOpacity - (maxOpacity - minOpacity) * norm;
				const gray = 0.2 + 0.8 * norm;

				// Aplicar transformación 3D simplificada
				// Solo rotateY para crear o efecto de noria
				const translateZ = Math.cos((rotationAngle * Math.PI) / 180) * 100 - 100;

				item.style.transform = `rotateY(${rotationAngle}deg) translateZ(${translateZ}px) scale(${scale})`;
				item.style.opacity = opacity;
				item.style.filter = `grayscale(${gray}) contrast(${1 - 0.15 * norm}) saturate(${1 - 0.25 * norm})`;

				// Encontrar o elemento máis cercano ao centro
				if (distance < minDistance) {
					minDistance = distance;
					closestItem = item;
				}
			});

			// Aplicar estilo ao elemento central de forma reactiva
			if (closestItem && closestItem !== centralItem) {
				if (centralItem) {
					centralItem.style.border = '2px solid #ccc';

				}
				closestItem.style.border = 'none';
				closestItem.style.boxShadow = '0px 0px 55px 2px rgba(71, 99, 146, 0.5), inset 0 0 10px #ffffffff';
				centralItem = closestItem;
			}

			ticking = false;
		}

		// Función para manexar scroll con requestAnimationFrame
		function onScroll() {
			if (!ticking) {
				window.requestAnimationFrame(update);
				ticking = true;
			}

			// Detectar scroll infinito en ambas direccións
			if (!isResetting) {
				if (carousel.scrollLeft <= buffer) {
					isResetting = true;
					const target = carousel.scrollLeft + setWidth;
					carousel.scrollLeft = target;
					lastScrollLeft = target;
					isResetting = false;
					return;
				}

				const rightEdge = setWidth * 2;
				if (carousel.scrollLeft >= rightEdge - buffer) {
					isResetting = true;
					const target = carousel.scrollLeft - setWidth;
					carousel.scrollLeft = target;
					lastScrollLeft = target;
					isResetting = false;
					return;
				}
			}

			lastScrollLeft = carousel.scrollLeft;
		}

		// Posicionar no bloque central para evitar saltos iniciais
		carousel.scrollLeft = setWidth;
		update();

		// Función para desprazar esquerda
		function scrollLeft() {
			carousel.scrollBy({
				left: -scrollAmount,
				behavior: 'smooth'
			});
		}

		// Función para desprazar dereita
		function scrollRight() {
			carousel.scrollBy({
				left: scrollAmount,
				behavior: 'smooth'
			});
		}

		// Escoitar eventos dos botóns
		prevBtn.addEventListener('click', scrollLeft);
		nextBtn.addEventListener('click', scrollRight);

		// Escoitar scroll e resize
		carousel.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		// (Opcional) centrar o primeiro elemento ao cargar en pantallas pequenas
		//window.addEventListener('load', () => {
		//	carousel.scrollLeft = 0;
		//});
	});
</script>

<!-- Lista de zonas con enlaces a sus páginas individuales -->
<div class="container">
	<div class="grid">
		{#each data.zonas as z}
			<a class="card" draggable="false" href={`/zonas/${z.slug}`}>
				<div class="overlay">
					<img src={z.portada} alt="Foto zona escalada {z.nome}" />
				</div>
				<div class="info">
					<h3 class="titulo">{z.nome}</h3>
				</div>
				<div class="footerCard">
					<p class="footerDescription">{z.descripcion}</p>
					<div class="footerDetails">
						<p><img class="icona" src="/iconas/sectores.png" alt="Icona sectores" />{z.sectores}</p>
						<hr />
						<p><img class="icona" src="/iconas/vias.png" alt="Icona vias" />{z.vias}</p>
						<hr />
						<p>
							<img
								class="icona"
								src="/iconas/aproximacion.png"
								alt="Icona aproximacion"
							/>{z.aproximacion}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="controls" aria-hidden="false">
		<button class="btn" id="prevBtn" aria-label="Anterior">Anterior</button>
		<a
			class="btn"
			target="_blank"
			href="https://www.google.com/maps/d/edit?mid=1EdHLPGe4VpsVlhtqUt8S6xjXnfJwr9o&usp=sharing"
			>Ver mapa</a
		>
		<button class="btn" id="nextBtn" aria-label="Siguiente">Seguinte</button>
	</div>
</div>

<style>
	:root {
		--min-scale: 0.32;
		--max-scale: 1;
		--min-opacity: 0.35;
		--max-opacity: 1;
	}
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		perspective: 1200px;
	}

	.grid {
		width: 80%;
		display: flex;
		gap: 10px;
		padding: 40px 0px;
		margin-top: 20px;
		flex-shrink: 0;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		scrollbar-width: none;
		perspective: 1200px;
		transform-style: preserve-3d;
		transition:
			transform 300ms cubic-bezier(0.2, 0.9, 0.2, 1),
			opacity 300ms cubic-bezier(0.2, 0.9, 0.2, 1),
			filter 300ms cubic-bezier(0.2, 0.9, 0.2, 1);
		will-change: transform, opacity, filter;
	}

	.grid > .card{
		scroll-snap-stop: always;
	}

	.card {
		text-decoration: none;
		width: 300px;
		height: 450px;
		padding: 15px;
		border-radius: 10px;
		display: flex;
		place-content: center;
		box-shadow:
		5px 5px 5px #000000cb,
		inset 0px 0px 3px rgb(0, 0, 0);
		position: relative;
		background-color: black;
		color: #fff;
		border: 2px solid #ccc;
		flex-shrink: 0;
		scroll-snap-align: center;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		bottom: 0;
		overflow: hidden;
		border-radius: 10px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info {
		position: relative;
		z-index: 2;
		color: rgb(255, 255, 255);
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.titulo {
		font-size: 3rem;
		text-shadow: 0 0 15px #ffffff86;
	}

	.footerCard {
		position: absolute;
		bottom: 0;
		font-size: 14px;
		width: 100%;
		background-color: black;
		border-radius: 0px 0px 10px 10px;
		color: #fff;
		box-shadow: inset 0 -2px 5px rgba(255, 255, 255, 0.599);
	}

	.footerDescription {
		font-size: 14px;
		text-align: justify;
		padding: 25px 15px;
		border-bottom: 2px solid #ccc;
		min-height: 100px;
	}

	.footerDetails {
		margin-top: 10px;
		padding: 5px 20px 15px 20px;
		font-size: 1rem;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		color: var(--corAzul);
	}

	.icona {
		width: 24px;
		height: 24px;
		margin-right: 5px;
		vertical-align: middle;
		position: relative;
		top: -2px;
	}


	/* Estilos dos controles */
	.controls {
		display: flex;
		justify-content: center;
		align-items: center;

	}

	button{
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.682);
	}

	.btn {
		padding: 12px 30px;
		font-size: var(--tamanhoIcona);
		font-weight: bold;
		background-color: #fff;
		color: #000;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
	}
	.btn:nth-child(2) {
		background-color: #000;
		color: #fff;
		box-shadow: inset 0 0 5px #fff;
	}

	.btn:hover {
		background-color: var(--corAzul);
		color: #fff;
		transform: scale(1.05);
	}

	.btn:active {
		transform: scale(0.95);
	}

	a {
		text-decoration: none;
		width: 150px;
		text-align: center;
	}

	#prevBtn{
		border-radius: 100% 0% 0% 100%;
	}
	#nextBtn{
		border-radius: 0% 100% 100% 0%;
	}

	/* Modifica botóns en pantallas pequenas */
	@media (max-width: 600px) {

		.grid {
			width: 100%;
		}
		
		.controls a {
			background-color: #000000;
			color: #fff;
			box-shadow: inset 0 0 2px #ffffff86;
			border-radius: 10px;
		}

		.btn {
			padding: 10px 15px;
			font-size: var(--tamanhoIcona);
			font-weight: bold;
			border-radius: 0px;
			background-color: #fff;
			color: #000;
			cursor: pointer;
			transition: all 0.3s ease;
			max-width: fit-content;
			border: none;
		}

		button{
			display: none;
		}
	}
</style>
