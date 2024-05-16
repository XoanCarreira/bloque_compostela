<script>
	import { onMount } from 'svelte';

	let showModal = false;

	onMount(() => {
		// Comprueba si el popup ya se ha mostrado
		if (!sessionStorage.getItem('popupShown')) {
			showModal = true;
			// Marca el popup como mostrado
			sessionStorage.setItem('popupShown', 'true');
		}
	});

	function closeModal() {
		showModal = false;
	}
</script>

{#if showModal}
	<div class="popup">
		<div class="popup__box">
			<!-- Contenido del popup -->
			<h4>RECORDA</h4>
            <ul>
                <li>Estás nun medio que merece ser respetado para que tod@s poidamos desfrutalo por igual</li>
                <li>É moi importante non deixar ningún tipo de residuo</li>
                <li>Non debemos cortar nin maltratar árbores, xa que ademais do respeto á natureza, moitos terreos son privados e podería ter consecuencias negativas para a nosa actividade</li>
                <li>Non molestes a fauna, eles estaban antes</li>
            </ul>
			<button on:click={closeModal}>Cerrar</button>
		</div>
	</div>
{/if}

<style>
	.popup {
		background-color: rgba(0, 0, 0, 0.521);
		position: absolute;
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
