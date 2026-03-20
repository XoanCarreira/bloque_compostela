<script>
	import { onMount } from 'svelte';

	let deferredPrompt = null;
	let podeInstalar = false;

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
	button{
        position: absolute;
        right: 0;
        top: 0;
        width: 150px;
        height: 150px;
        border-radius: 0 0 0 100%;
        color: var(--corFondo);
        background-color: var(--corAzul);
        border: 5px solid var(--corFondo);
        opacity: 0.7;
        font-size: var(--tamanhoTexto);
        font-weight: 800;
        box-shadow: inset 0 -5px 15px #000000aa;
	}

    @media (width <= 500px) {
        button{
            width: 100px;
            height: 100px;
            font-size: var(--tamanhoTextoPequeno);
        }
    }   
</style>
