<script>
	function irAtras() {
		if (history.length > 1) {
			history.back();
		} else {
			window.location.href = '/zonas';
		}
	}
</script>

<div class="container">
	<button on:click={irAtras}>Atrás</button>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	button {
		width: 90px;
		height: 40px;
		border-radius: 0 0 100% 100%;
		color: var(--corFondo);
		background-color: var(--corTexto);
		border: 2px solid var(--corFondo);
		position: relative;
		opacity: 0.6;
		font-size: var(--tamanhoTexto);
		font-weight: 800;
		box-shadow: inset 0 -5px 15px #000000aa;
	}

	button:hover {
		opacity: 1;
	}

	@media (width < 800px) {
		button {
			margin: 0 auto;
			width: 70px;
			height: 70px;
			position: fixed;
			right: -10px;
			bottom: 0;
			border-radius: 100% 0 0 0;
		}
	}
</style>
