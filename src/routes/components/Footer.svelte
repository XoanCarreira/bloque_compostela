<script>
	let visible = false;
</script>

<footer>
	<label>
		<input type="checkbox" bind:checked={visible} />
		{#if (visible == true) }
			<strong>-</strong> Lenda
		{:else}
			<strong>+</strong> Lenda
		{/if}
	</label>
	{#if visible}
	
	<div class="lenda">
		<table class="grados">
			<tr>
				<th colspan="2">Grados</th>
			</tr>
			<tr>
				<td><span class="azul">_</span></td>
				<td>6a+ ou inferior</td>
			</tr>
			<tr>
				<td><span class="amarelo">_</span></td>
				<td>6b a 6c+</td>
			</tr>
			<tr>
				<td><span class="verde">_</span></td>
				<td>7a a 7b+</td>
			</tr>
			<tr>
				<td><span class="vermello">_</span></td>
				<td>7c ou superior</td>
			</tr>
			<tr>
				<td><span class="blanco">_</span></td>
				<td>Proxecto</td>
			</tr>	
		</table>
		<table>
			<tr>
				<th colspan="2">Símbolos</th>
			</tr>
			<tr>
				<td><img class="icona" src="/iconas/sectores.png" alt="Icona sectores"></td>
				<td>Sectores</td>
			</tr>
			<tr>
				<td><img class="icona" src="/iconas/vias.png" alt="Icona vias"></td>
				<td>Vías</td>
			</tr>
			<tr>
				<td><img class="icona" src="/iconas/aproximacion.png" alt="Icona aproximacion"></td>
				<td>Aproximación</td>
			</tr>
			<tr>
				<td><img class="icona" src="/iconas/grado.png" alt="Icona dificultad"></td>
				<td>Dificultade</td>
			</tr>
		</table>
		
	</div>
	{/if}
	<div>
		<p class="version">Boulder Compostela 2.0.1</p>

	</div>
</footer>

<style>
	footer {
		border-top: 3px solid var(--corAzul);
        margin-top:25px;
		padding: 25px 15px 15px 15px;
		background-color: var(--corFondo);

	}

	div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		column-gap: 10px;
		padding-top: 15px;
	}

	span {
		font-size: var(--tamanhoTitulo);
		font-weight: 800;
		line-height: 30px;
		position: relative;
		top: -20px;
	}

	.lenda {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 15px;
		margin-top: 15px;
	}

	table{
		color: #fff;
		border-collapse: collapse;

	}

	td, th{
		padding: 10px 10px;
		text-align: center;
		font-size: var(--tamanhoPequeno);
		border: 1px solid #ffffffd0;
	}

	.icona {
		width: 24px;
		height: 24px;
		margin-right: 5px;
		vertical-align: middle;
		position: relative;
		top: -2px;
	}

	label{
		box-shadow: inset 0 0 5px #fff ;
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
		width: 100%;
		padding: 15px;
		text-align: center;
		margin-top: 25px;
		font-size: 0.9rem;
		color: #5DACA3;
	}

</style>
