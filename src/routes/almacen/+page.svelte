<script>
	import Info from '../components/Infoalmacen.svelte';
	import almacens from './almacen.js';

	//Mostrar mapa zona
	import { fade } from 'svelte/transition';
	let visible = false;

	//Selector sector
	let sectorSelect = almacens.sector;
</script>

<div class="container">
	<h3>Almacén</h3>

	<Info/>
	<div class="selector">
		{#each almacens as almacen}
			<button on:click={() => (sectorSelect = almacens.sector)}>{almacen.sector}</button>
		{/each}
	</div>

	<div class="grid">
		{#each almacens as almacen}
			{#if almacen.almacen === sectorSelect}
				<div class="sector__box">
					<h4><u>{almacen.sector}</u></h4>
					<!-- <p>{sector.descripcion}</p> -->
					<p><strong>Orientación: </strong>{almacen.orientacion}</p>
					<p><strong>Aproximación: </strong>{almacen.aproximacion}</p>
					<a target="_blank" href={almacen.ubicacion}>{almacen.cordenadas}</a>
					<div class="mapa__sector">
						<label>
							<input type="checkbox" bind:checked={visible}/>
							{#if (visible == true) }
								Ocultar mapa
							{:else}
								Mostar mapa
							{/if}
						</label>
						{#if visible}
							<img in:fade out:fade src={almacen.mapa} alt="Mapa" />
						{/if}
					</div>
					<div class="sector__croquis">
						{#each almacen.src as imaxe}
							<img src={imaxe} alt="Sector {almacen.sector}" />
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	h3 {
		font-size: 2.5rem;
		text-align: center;
	}

	.selector {
		display: flex;
		gap: 5px;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 500px;
		margin: 0 auto;
	}

	button {
		width: 90px;
		height: 40px;
		background-color: #000;
		color: #fff;
		font-weight: 700;
		letter-spacing: 1.2px;
		border: none;
		box-shadow:
			5px 5px 5px #0000008e,
			inset 0px 0px 3px white;
		border-radius: 8px;
	}

	button:hover {
		opacity: 0.9;
		transform: translateY(-2px);
	}

	.grid {
		margin: 0 auto;
		max-width: 500px;
		min-height: 500px;
	}

	.sector__croquis {
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	label{
		margin-bottom: 5px;
		padding: 8px;
		background-color: #00000028;
		max-width: max-content;
		border-radius: 8px;
		user-select: none;
	}

	input {
		margin-bottom: 10px;
		display: none;
		
	}

	.mapa__sector {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}

	img {
		max-width: 100%;
		width: 500px;
		min-height: 250px;
		margin: 0 auto;
		box-shadow: 0px 0px 10px 2px #000;
	}

	h4 {
		text-align: center;
		font-size: 1.5rem;
	}

	a {
		color: #000;
		text-decoration: none;
	}

	@media (width <=600px) {
		img {
			width: 320px;
			height: min-content;
		}
	}
</style>
