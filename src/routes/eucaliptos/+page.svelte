<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<main>
	<!-- <h2>Eucaliptos-free</h2> -->
	<Navbar info={`./eucaliptos`} sectores={`./eucaliptos/sectores`} escola={"Eucaliptos-free"}/>
	<div class="descripcion">
		<p>En construcción...</p>
	</div>
	<div class="mapa">
		<img src="/lampai/mapa_lampai.jpg" alt="Mapa de sectores lampai" />
	</div>
</main>

<style>
	/* h2 {
		font-size: 35px;
		font-weight: 800;
		text-align: center;
		margin: 20px 0;
	} */

	main{
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
	
	.descripcion {
		max-width: 90%;
		margin: 0 auto;
		margin-top: 20px;
	}

	p {
		margin-bottom: 10px;
		font-size: 1.1rem;
	}

	.mapa {
		display: flex;
        justify-content: center;
		overflow-x: scroll;
	}
</style>
