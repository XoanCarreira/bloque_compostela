<script>
	import Navbar from '../components/Navbar.svelte';
	import sectores from './sectores.js';

	//Mostrar mapa zona
	import { fade } from 'svelte/transition';
	let visible = false;

	//Selector sector
	let sectorSelect = sectores[0].sector;
</script>



<div class="container">
	<h3>Lampai</h3>
	<!-- <Navbar info={`/lampai`} sectores={`/lampai/sectores`} escola={"Lampai"} /> -->
	<div class="selector">
		{#each sectores as sector}
			<button on:click={() => (sectorSelect = sector.sector)}>{sector.sector}</button>
		{/each}
	</div>

	<div class="grid">
		{#each sectores as sector}
			{#if sector.sector === sectorSelect}
				<div class="sector__box">
					<h4><u>{sector.sector}</u></h4>
					<!-- <p>{sector.descripcion}</p> -->
					<p><strong>Orientación: </strong>{sector.orientacion}</p>
					<p><strong>Aproximación: </strong>{sector.aproximacion}</p>
					<a target="_blank" href={sector.ubicacion}>{sector.cordenadas}</a>
					<div class="mapa__sector">
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
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	h3{
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
		box-shadow: 5px 5px 5px #0000008e, inset 0px 0px 3px white;
		border-radius: 8px;
	}

	button:hover{
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

	input{
		margin-bottom: 10px;
	}

	.mapa__sector{
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
		img{
			width: 320px;
			height: min-content;
		}
	}
</style>
