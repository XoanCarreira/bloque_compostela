<script>
	export let data;
</script>


<h2>Zonas</h2>
<div class="grid">
	{#each data.zonas as z}
		<a class="card" href={`/zonas/${z.slug}`}>
			<h3>{z.nome}</h3>
			<p>{z.descripcion}</p>
		</a>
	{/each}
</div>



<style>
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	}
	.card {
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		background: #fff;
	}
</style>
