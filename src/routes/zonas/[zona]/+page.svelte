<script>
	export let data;
</script>

<header>
	<h2>{data.zona.nombre}</h2>
	<p>{data.zona.descripcion}</p>
</header>

<nav>
	{#each data.zona.sectores as s}
		<a class="sector-btn" href={`/zonas/${data.zona.slug}/${s.slug}`}>
			<img class="overlay" src={s.portada} alt="Foto sector {s.nombre}" />
			<h3>{s.nombre}</h3>
			<div class="footer">
				<p><strong>Vías: </strong>{s.vias}</p>
				<p><strong>Aprox.: </strong>{s.aproximacion} min.</p>
			</div>
		</a>
	{/each}
</nav>

<slot />

<style>
	header {
		margin-bottom: 1rem;
		text-align: center;
	}
	nav {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		justify-content: center;
	}
	.sector-btn {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		background:rgba(0, 0, 0, 0.658);
		text-decoration: none;
		color: rgb(255, 255, 255);
		width: 200px;
		height: 200px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		position: relative;
	}

	.overlay {
		position: absolute;
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 6px;
		opacity: 1;
		z-index: -1;
	}

	.footer {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 0.9rem;
	}
</style>