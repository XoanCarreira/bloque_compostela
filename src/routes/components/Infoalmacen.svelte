<script>
	let ver_info = false;
	let ver_mapa = false;

</script>

<div class="desplegable">
	<label>
		<input type="checkbox" name="info" id="info" bind:checked={ver_info}/>
		Info
	</label>
	{#if ver_info}
		<div class="descripcion">
			<p>
				Bloque aislado pero con liñas de gran calidade.
			</p>
			<p>Podemos facer convos e comezos sentados, dando pasos realmente duros.</p>
			<p>
				A orientación é suroeste.
			</p>
			<p>Aproximación corta duns 5 minutos.</p>
		</div>
	{/if}
</div>

<div class="desplegable">
	<label>
		<input type="checkbox" name="mapa" id="mapa" bind:checked={ver_mapa}/>
		Mapa sectores
	</label>
</div>
	{#if ver_mapa}
		<div class="mapa">
			<img src="/almacen/mapa_almacen.jpg" alt="Mapa do sector Almacén" />
		</div>
	{/if}

<style>
	.desplegable {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		max-width: 90%;
		width: 500px;
		background-color: #000;
		border-radius: 8px;
		padding: 5px 15px;
	}

	.descripcion {
		margin: 0 auto;
		animation: desplegar 0.4s ease-in-out 0s 1;
	}

	@keyframes desplegar {
		0%{
			opacity: 0.2;
		}
		100%{
			opacity: 1;
		}
	}

	p {
		margin-bottom: 10px;
		font-size: 1.1rem;
		color:#5DACA3;
	}

	.mapa {
		margin: 0 auto;
		max-width: 99%;
		overflow-x: scroll;
	}

	img{
		margin: 0 auto;
	}

	input {
		display: none;
	}

	label {
		margin: 0 auto;
		padding: 5px 0;
		border-radius: 8px;
		font-size: 1.5rem;
		font-weight: 600;
		width: 500px;
		max-width: 100%;
		text-align: center;
		user-select: none;
		color: #fff;
	}
</style>
