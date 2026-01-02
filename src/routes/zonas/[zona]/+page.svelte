<script>
	export let data;
</script>

<header>
	<h2>{data.zona.nombre}</h2>
	<!--<p>{data.zona.descripcion}</p>-->
</header>

<nav>
	{#each data.zona.sectores as s}
		<a class="sector-btn" draggable="false" href={`/zonas/${data.zona.slug}/${s.slug}`}>
			<img class="overlay" src={s.portada} alt="Foto sector {s.nombre}" />
			<h3>{s.nombre}</h3>
			<div class="footer">
				<p><img class="icona" src="/iconas/vias.png" alt="Icona vias">{s.vias}</p>
				<hr>
				<p><img class="icona" src="/iconas/grado.png" alt="Icona dificultad">{s.grados}</p>
				<hr>
				<p><img class="icona" src="/iconas/aproximacion.png" alt="Icona aproximacion">{s.aproximacion} min.</p>
			</div>
		</a>
	{/each}
</nav>

<slot />

<style>
	header {
		margin-bottom: 1rem;
		padding: 15px;
		text-align: center;
		color: #fff;
	}

	h2{
		font-size: var(--tamanhoTitulo);
	}

	h3{
		font-size: var(--tamanhoSubtitulo);
	}
	nav {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
		justify-content: center;
	}

	.icona {
		width: 16px;
		height: 16px;
		margin-right: 5px;
		vertical-align: middle;
		position: relative;
		top: -2px;
	}

	.sector-btn {
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		border: 1px solid #ffffffd3;
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
		user-select: none;
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
		bottom: 0;
		left: 0;
		padding: 10px 3px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: var(--tamanhoInfoIcona);
		color: var(--corAzul);
		background-color: #000;
		border-radius: 0px 0px 6px 6px;
	}
</style>