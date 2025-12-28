<script>
	export let data;
</script>

<header>
	<h2>{data.zona.nombre}</h2>
	<p>{data.zona.descripcion}</p>
</header>

<nav>
	{#each data.zona.sectores as s}
		<a class="sector-btn" href={`/zonas/${data.zona.slug}/${s.slug}`}>{s.nombre}</a>
	{/each}
</nav>

<slot />

<style>
	header {
		margin-bottom: 1rem;
	}
	nav {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.sector-btn {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		background: #f3f3f3;
		text-decoration: none;
		color: inherit;
	}
</style>
