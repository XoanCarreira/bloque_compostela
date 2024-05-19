<script>
	import Navbar from '../../components/Navbar.svelte';
	import sectores from './sectores.js';

	//Mostrar mapa zona
	import { fade } from 'svelte/transition';
	let visible = false;

	//Selector sector
	let sectorSelect = sectores[0].sector;
</script>



<div class="container">
	<h2>Lampai</h2>
	<Navbar info={`/lampai`} sectores={`/lampai/sectores`} />
	<div class="selector">
		{#each sectores as sector}
			<button on:click={() => (sectorSelect = sector.sector)}>{sector.sector}</button>
		{/each}
	</div>

	<div class="grid">
		{#each sectores as sector}
			{#if sector.sector === sectorSelect}
				<div class="sector__box">
					<h4>{sector.sector}</h4>
					<!-- <p>{sector.descripcion}</p> -->
					<p><strong>Orientación: </strong>{sector.orientacion}</p>
					<p><strong>Aproximación: </strong>{sector.aproximacion}</p>
					<a target="_blank" href={sector.ubicacion}>{sector.cordenadas}</a>
					<div>
						<label>
							<input type="checkbox" bind:checked={visible} />
							Mostrar mapa
						</label>
						{#if visible}
							<img in:fade out:fade src={sector.mapa} alt="Mapa" />
						{/if}
					</div>
					<div class="sector__croquis">
						{#each sector.src as imaxe}
							<img src={imaxe} alt="Sector {sector.sector}" />
						{/each}
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>



<style>
	.container {
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	h2 {
		font-size: 35px;
		font-weight: 800;
		text-align: center;
	}

	.selector {
		display: flex;
		gap: 5px;
		justify-content: center;
		flex-wrap: wrap;
	}

	button {
		width: 80px;
		height: 40px;
		background-color: #000;
		color: #fff;
		font-weight: 700;
		letter-spacing: 1.2px;
		border: none;
		box-shadow: 5px 5px 5px #0000008e, inset 0px 0px 3px white;
		border-radius: 8px;
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

	img {
		max-width: 90%;
		width: 500px;
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
</style>
