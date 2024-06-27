<script>
	let visible = false;
</script>

<footer>
	<label>
		<input type="checkbox" bind:checked={visible} />
		Ten en conta que os grados son orientativos
	</label>

	{#if visible}
		<div>
			<p>
				<span class="azul">-</span>
				6a+ ou inferior
			</p>
			<p>
				<span class="amarelo">-</span>
				6b a 6c+
			</p>
			<p>
				<span class="verde">-</span>
				7a a 7b+
			</p>
			<p>
				<span class="vermello">-</span>
				7c ou superior
			</p>
			<p>
				<span class="blanco">-</span>
				Proxecto
			</p>
		</div>
	{/if}
</footer>

<style>
	footer {
        margin-top: 15px;
		padding: 15px;
		background-color: #000;
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
		font-size: 4rem;
		font-weight: 800;
		line-height: 30px;
		position: relative;
		top: 10px;
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
		font-size: 1.2rem;
	}

	label {
		width: 100%;
		text-align: center;
        color: #fff;
	}
</style>
