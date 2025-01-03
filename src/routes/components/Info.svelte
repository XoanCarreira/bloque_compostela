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
				Gran número de liñas abertas pero con moitas posibilidades de novas aperturas.
			</p>
			<p>Predomina o grao medio-baixo, pero tamén hai liñas duras como por exemplo "Gaia".</p>
			<p>
				Buscando, podemos atopar tódalas orientacións, aínda que predominan sur e oeste.
			</p>
			<p>As aproximacións van dende 1 minuto, caso do Mirador, ata 25 minutos no caso do Mangui.</p>
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
			<img src="/lampai/mapa_lampai.jpg" alt="Mapa de sectores lampai" />
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
