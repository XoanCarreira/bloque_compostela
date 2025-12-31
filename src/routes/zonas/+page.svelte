<script>
	export let data;
	import { onMount } from 'svelte';

	onMount(() => {
		const carousel = document.querySelector('.grid');
		const prevBtn = document.querySelector('#prevBtn');
		const nextBtn = document.querySelector('#nextBtn');
		let items = Array.from(carousel.querySelectorAll('.card'));

		// Clonar elementos para crear efecto infinito
		const originalItems = [...items];
		originalItems.forEach((item) => {
			const clone = item.cloneNode(true);
			carousel.appendChild(clone);
		});

		// Actualizar la lista de items con los originales + clonados
		items = Array.from(carousel.querySelectorAll('.card'));

		// Parámetros de ajuste
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
		const scrollAmount = 350; // Píxeles a desplazar con los botones

		let lastScrollLeft = 0;

		function resetScroll() {
			isResetting = true;
			carousel.scrollLeft = 0;
			lastScrollLeft = 0;
			isResetting = false;
		}

		function resetScrollToEnd() {
			isResetting = true;
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
			carousel.scrollLeft = maxScroll;
			lastScrollLeft = maxScroll;
			isResetting = false;
		}

		function update() {
			const rect = carousel.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			let closestItem = null;
			let minDistance = Infinity;

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
				// Solo rotateY para crear el efecto de noria
				const translateZ = Math.cos((rotationAngle * Math.PI) / 180) * 100 - 100;

				item.style.transform = `rotateY(${rotationAngle}deg) translateZ(${translateZ}px) scale(${scale})`;
				item.style.opacity = opacity;
				item.style.filter = `grayscale(${gray}) contrast(${1 - 0.15 * norm}) saturate(${1 - 0.25 * norm})`;

				// Encontrar el elemento más cercano al centro
				if (distance < minDistance) {
					minDistance = distance;
					closestItem = item;
				}
			});

			// Aplicar estilo al elemento central de forma reactiva
			if (closestItem && closestItem !== centralItem) {
				if (centralItem) {
					centralItem.style.border = '2px solid #ccc';
					centralItem.style.boxShadow = `
						5px 5px 5px #000000cb,
						inset 0px 0px 3px rgb(0, 0, 0)
					`;
				}
				closestItem.style.border = '2px solid #000';
				closestItem.style.boxShadow = '0px 0px 35px 2px #ffffff55';
				centralItem = closestItem;
			}

			ticking = false;
		}

		function onScroll() {
			if (!ticking) {
				window.requestAnimationFrame(update);
				ticking = true;
			}

			// Detectar scroll infinito en ambas direcciones
			if (!isResetting) {
				const maxScroll = carousel.scrollWidth - carousel.clientWidth;
				const threshold = 100; // Píxeles de margen

				// Si scrollea hacia la derecha y llega al final
				if (carousel.scrollLeft >= maxScroll - threshold && lastScrollLeft < carousel.scrollLeft) {
					resetScroll();
				}
				// Si scrollea hacia la izquierda y llega al inicio
				else if (carousel.scrollLeft <= threshold && lastScrollLeft > carousel.scrollLeft) {
					resetScrollToEnd();
				}
			}

			lastScrollLeft = carousel.scrollLeft;
		}

		// Inicializar
		update();

		// Función para desplazar izquierda
		function scrollLeft() {
			carousel.scrollBy({
				left: -scrollAmount,
				behavior: 'smooth'
			});
		}

		// Función para desplazar derecha
		function scrollRight() {
			carousel.scrollBy({
				left: scrollAmount,
				behavior: 'smooth'
			});
		}

		// Escuchar eventos de los botones
		prevBtn.addEventListener('click', scrollLeft);
		nextBtn.addEventListener('click', scrollRight);

		// Escuchar scroll y resize
		carousel.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		// (Opcional) centrar el primer elemento al cargar en pantallas pequeñas
		window.addEventListener('load', () => {
			carousel.scrollLeft = 0;
		});
	});
</script>

<!-- Lista de zonas con enlaces a sus páginas individuales -->
<div class="container">
	<div class="grid">
		{#each data.zonas as z}
			<a class="card" href={`/zonas/${z.slug}`}>
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
		gap: 20px;
		padding: 40px 20px;
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
		opacity: 0.3;
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
	}

	.footerDescription {
		font-size: 14px;
		text-align: justify;
		padding: 10px;
		border-bottom: 2px solid #ccc;
		height: 100px;
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

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
		margin: 30px 0;
		padding: 0 20px;
	}

	.controls a{
		background-color: var(--corAzul);
	}

	.btn {
		padding: 12px 30px;
		font-size: var(--tamanhoIcona);
		font-weight: bold;
		border-radius: 8px;
		background-color: #fff;
		color: #000;
		cursor: pointer;
		transition: all 0.3s ease;
		max-width: fit-content;
	}


	.btn:hover {
		background-color: #302f2f;
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

	/* Oculta botóns en pantallas pequenas */
	@media (max-width: 600px) {
		button {
			display: block;
		}

		.grid {
			width: 100%;
		}

		.controls {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
			margin: 30px 0;
			padding: 0 20px;
			max-width: 100vw;
			overflow-x: hidden;
		}

		.btn {
			padding: 10px 15px;
			font-size: var(--tamanhoIcona);
			font-weight: bold;
			border-radius: 8px;
			background-color: #fff;
			color: #000;
			cursor: pointer;
			transition: all 0.3s ease;
			max-width: fit-content;
		}
	}
</style>
