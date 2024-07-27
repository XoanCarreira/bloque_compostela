<script>
	let ver_info = false;
    let ver_mapa = false;
</script>

<label>
    <input type="checkbox" name="info" id="info" bind:checked={ver_info}>
    Info
</label>
{#if ver_info}
	<div class="descripcion">
		<p>
			Zona con un número considerable de liñas abertas, aínda que na maioría dos casos os bloques
			están dispersos. En xeral a calidade da pedra é moi boa, con un gran fino e compacto. Podemos
			atopar placas, desplomes, adherencias e incluso algún teito.
		</p>
		<p>Predomina o grao medio-baixo pero tamén hai liñas duras como por exemplo "Gaia".</p>
		<p>
			A orientación é maiormente sur e oeste, aínda que hai sectores como Mangui ou Fortaleza nos
			que podemos atopar sombra todo o día.
		</p>
		<p>As aproximacións van dende 1 minuto, caso do Mirador, ata 25 minutos no caso do Mangui.</p>
	</div>
{/if}

<label>
    <input type="checkbox" name="mapa" id="mapa" bind:checked={ver_mapa}>
    Mapa sectores
</label>
{#if ver_mapa}
    
<div class="mapa">
    <img src="/lampai/mapa_lampai.jpg" alt="Mapa de sectores lampai" />
</div>
{/if}

<style>
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

    input{
        display: none;
    }

    label{
        margin: 0 auto;
        padding: 5px 0;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 600;
        background-color: #00000028;
        width: 500px;
        max-width: 90%;
        text-align: center;
    }
</style>
