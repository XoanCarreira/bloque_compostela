<script>
	import { onMount } from 'svelte';

	let showModal = false;

	onMount(() => {
		// Comproba se o popup xa se mostrou
		if (!localStorage.getItem('popupShown')) {
			showModal = true;
			// Marca o popup como mostrado
			localStorage.setItem('popupShown', 'true');
		}
	});

	function closeModal() {
		showModal = false;
	}
</script>

{#if showModal}
	<div class="popup">
		<div class="popup__box">
			<!-- Contido do popup -->
			<h4>RECORDA</h4>
            <ul>
                <li>Estás nun medio que merece ser respetado para que tod@s poidamos desfrutalo por igual</li>
                <li>É moi importante non deixar ningún tipo de residuo</li>
                <li>Non debemos cortar nin maltratar árbores, xa que ademais do respeto á natureza, moitos terreos son privados e podería ter consecuencias negativas para a nosa actividade</li>
                <li>Non molestes a fauna, eles estaban antes</li>
                <!-- <li>A escalada é un deporte de risco no que cada un é responsable de garantir a súa seguridade</li>
                <li>Boulder Compostela non se fai responsable de posibles accidentes durante a práctica da escalada nas zonas reseñadas</li> -->
            </ul>
			<button on:click={closeModal}>Cerrar</button>
		</div>
	</div>
{/if}

<style>
	.popup {
		background-color: rgba(0, 0, 0, 0.521);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup__box {
		background-color: #fff;
        border-radius: 8px;
		width: 400px;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
        padding: 15px 30px;
	}

    h4{
        font-size: 28px;
    }

    li{
        margin-bottom: 10px;
    }

    button{
        padding: 5px 10px;
        font-size: 1.2rem;
    }
</style>
