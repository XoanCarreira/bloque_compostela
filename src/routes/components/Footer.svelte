<script>
	let visible = false;
</script>

<footer>
	<label>
		<input type="checkbox" bind:checked={visible} />
		{#if (visible == true) }
			Ocultar grados
		{:else}
			Mostrar grados
		{/if}
	</label>
	{#if visible}
	<div class="grados">
		<p>Ten en conta que os grados son orientativos</p>
	</div>
	<div>
		<p>
			<span class="azul">_</span>
			6a+ ou inferior
		</p>
		<p>
			<span class="amarelo">_</span>
			6b a 6c+
		</p>
		<p>
			<span class="verde">_</span>
			7a a 7b+
		</p>
		<p>
			<span class="vermello">_</span>
			7c ou superior
		</p>
		<p>
			<span class="blanco">_</span>
			Proxecto
		</p>
	</div>
	{/if}
	<div>
		<p class="version">Boulder Compostela 2.0.1</p>

	</div>
</footer>

<style>
	footer {
        margin-top:15px;
		padding: 15px;
		background-color: #000;
		box-shadow: 0px -3px 10px #0000008e;
	}

	div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		column-gap: 10px;
	}

	span {
		font-size: 3rem;
		font-weight: 800;
		line-height: 30px;
		position: relative;
		top: -10px;
	}

	.grados{
		margin: 15px auto;
		padding: 0;
	}

	label{
		border: 1px inset white;
		padding: 8px;
		border-radius: 8px;
        color: #fff;
		user-select: none;
	}

	input{
		display: none;
	}

	.azul {
		color: #0000ff;
	}

	.amarelo {
		color: #ffff00;
	}

	.verde {
		color: #00ff00;
	}

	.vermello {
		color: #ff0000;
	}

	.blanco{
		color: #ffffff;
	}

	p {
		color: #fff;
		font-size: 1rem;
	}


	.version{
		border-top: 3px solid #5DACA3;
		width: 100%;
		padding: 15px;
		text-align: center;
		margin-top: 25px;
		font-size: 0.9rem;
		color: #5DACA3;
	}

</style>
