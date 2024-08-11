<script>
	import Menu from "./Menu.svelte";

	
</script>

<header>
	<!--Boton menú-->
	<Menu/>

	<div class="header">
		<a href="/">
			<img src="/favicon_limpio.svg" alt="Logo de persoa practicando boulder" />
			
			<h1>Boulder Compostela</h1>
		</a>
	</div>
</header>

<style>
	header{
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background: linear-gradient(rgba(0, 0, 0, 0.788), #1f3a37 10%, #5daca3 90%);
	}

	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 35px;
		align-items: center;
		font-size: 30px;
		font-weight: 800;
		min-height: 80px;
		max-width: 85%;
	}

	a{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		text-decoration: none;
		color: black;
		flex-wrap: wrap;
	}

	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	@media (width <=800px){
		h1{
			font-size: 3rem;
		}
	}

	@media (width <= 500px) {
		h1 {
			display: none;
			
		}

		img{
			z-index: 1;
		}

	
	}
</style>
