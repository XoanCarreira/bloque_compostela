<script>
	export let error;
	export let status;
</script>

<h1>{status}</h1>
<p>{error?.message ?? 'Vaia, xurdíu algún erro'}</p>
<a href="/zonas">Volver a zonas</a>

<style>
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: #fff;
	}
	p {
		margin-bottom: 1rem;
		color: #fff
	}
	a {
		color: #0070f3;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
