<script>
	import Navbar from '../../components/Navbar.svelte';
	import sectores from './sectores';

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
					<p>{sector.descripcion}</p>
					<p><strong>Orientación:</strong>{sector.orientacion}</p>
					<p><strong>Aproximación:</strong>{sector.aproximacion}</p>
					<a target="_blank" href={sector.ubicacion}>{sector.cordenadas}</a>
                    {#each sector.src as imaxe }
                        <img src={imaxe} alt="Sector {sector.sector}">
                    {/each}
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
		gap: 15px;
		justify-content: center;
		flex-wrap: wrap;
	}

	button {
		padding: 5px 10px;
	}

	.grid {
		margin: 0 auto;
		max-width: 400px;
		min-height: 500px;
	}

	img {
		max-width: 350px;
		margin: 0 auto;
	}

	h4 {
		text-align: center;
		font-size: 1.5rem;
	}

    a{
        color:#000;
        text-decoration: none;
    }

</style>
