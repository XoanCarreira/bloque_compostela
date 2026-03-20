<script>
	import { onMount } from 'svelte';

	let deferredPrompt = null; //Gardo o evento de instalación
	let podeInstalar = false; //Indica se a instalación é posible ou non

	// Escoitamos o evento 'beforeinstallprompt' para saber cando a instalación é posible
	//e anulamos o comportamento por defecto para mostrar o noso propio botón de instalación
	onMount(() => {
		const handleBeforeInstallPrompt = (e) => {
			e.preventDefault();
			deferredPrompt = e;
			podeInstalar = true;
		};

		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

		//Limpa o evento cando o compoñente se desmonta
		return () => {
			window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
		};
	});

	// Función para mostrar o prompt de instalación cando o usuario fai clic no botón
	async function instalar() {
		if (!deferredPrompt) return;

		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;

		if (outcome === 'accepted') {
			console.log('Usuario aceptou a instalación');
		} else {
			console.log('Instalación cancelada polo usuario');
		}

		deferredPrompt = null;
		podeInstalar = false;
	}
</script>

<!-- O botón da instalación so se mostrará cando sexa posible instalar-->
{#if podeInstalar}
	<div>
		<button on:click={instalar}>Instalar</button>
	</div>
{/if}

<style>
	button {
		position: absolute;
		right: 20px;
		top: 30px;
		border-radius: 5px;
		padding: 10px 20px;
		color: var(--corFondo);
		background-color: var(--corAzul);
		opacity: 0.6;
		border: none;
		font-size: var(--tamanhoTexto);
		font-weight: 800;
		box-shadow: inset 0 0 5px #000000;
	}

	button:hover {
		opacity: 1;
	}

	@media (width <= 500px) {
		button {
			max-width: 80px;
			padding: 5px 10px;
		}
	}
</style>
