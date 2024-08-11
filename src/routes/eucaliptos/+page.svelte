<script>
	import Info from '../components/Info.svelte';
	// import sectores from './eucaliptos.js';
	import Sector from '../components/Sectores.svelte'

	// //Mostrar mapa zona
	// import { fade } from 'svelte/transition';
	// let visible = false;

	// //Selector sector
	// let sectorSelect = sectores[0].sector;
</script>

<div class="container">
	<h3>Eucaliptos-free</h3>

	<Info/>
	<Sector/>
	<!-- <div class="selector">
		{#each sectores as sector}
			<button on:click={() => (sectorSelect = sector.sector)}>{sector.sector}</button>
		{/each}
	</div>

	<div class="grid">
		{#each sectores as sector}
			{#if sector.sector === sectorSelect}
				<div class="sector__box">
					<h4><u>{sector.sector}</u></h4>
					<p><strong>Orientación: </strong>{sector.orientacion}</p>
					<p><strong>Aproximación: </strong>{sector.aproximacion}</p>
					<a target="_blank" href={sector.ubicacion}>{sector.cordenadas}</a>
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
	</div> -->
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

	
</style>
