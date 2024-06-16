<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<main>
	<Navbar info={`./lampai`} sectores={`./lampai/sectores`} escola={"Lampai"} />
	<div class="descripcion">
		<p>
			Zona con un número considerable de liñas abertas, aínda que na maioría dos casos os bloques
			están dispersos. En xeral a calidade da pedra é excepcional, con un gran fino e compacto.
			Podemos atopar placas, desplomes, adherencias e incluso algún teito.
		</p>
		<p>
			A orientación é maiormente sur e oeste, aínda que hai sectores como Mangui ou Fortaleza nos
			que podemos atopar sombra todo o día.
		</p>
		<p>As aproximacións van dende 1 minuto, caso do Mirador, ata 25 minutos no caso do Mangui.</p>
		<p>
			Predomina o grado medio-baixo, aínda que tamén hai algunha liña dura como "Gaia".
		</p>
	</div>
	<div class="mapa">
		<img src="/lampai/mapa_lampai.jpg" alt="Mapa de sectores lampai" />
	</div>
</main>

<style>
	main{
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 0 10px;
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
