<script>
	export let error;
	export let status;
</script>

<h1>{status}</h1>
<p>{error?.message ?? 'Ha ocurrido un error'}</p>
<a href="/zonas">Volver a zonas</a>

<style>
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	p {
		margin-bottom: 1rem;
	}
	a {
		color: #0070f3;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
