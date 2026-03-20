<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Breadcrumbs from './components/Breadcrumbs.svelte';
	import Back from '../lib/components/Back.svelte';
	import {page} from '$app/stores';
</script>

<Header />
{#if $page.url.pathname !== '/zonas'}
	<Back/>
	<Breadcrumbs />
{/if}
<slot />
<Footer/>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	:global(body) {
		overflow-x: hidden;
	}

</style>
