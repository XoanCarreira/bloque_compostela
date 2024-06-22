<script>
	import { onMount } from 'svelte';
	import Recorda from './Recorda.svelte';

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
			 <Recorda/>
			
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

    button{
        padding: 5px 10px;
        font-size: 1.2rem;
    }
</style>
