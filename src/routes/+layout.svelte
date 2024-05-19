<script>
	import Header from './components/Header.svelte';
	import Popup from './components/Popup.svelte';
	import Footer from './components/Footer.svelte';
</script>


<Popup />
<Header />
<slot />
<Footer/>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

</style>
