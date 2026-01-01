<script>
	import Modal from '$lib/modal.svelte';
	export let data;

	// convertir croquis a formato esperado por Modal
	const images = (data?.sector?.croquis || []).map((i) => ({ full: i.full, alt: i.alt }));

	let modalOpen = false;
	let modalIndex = 0;

	function openImageAt(i) {
		modalIndex = i;
		modalOpen = true;
	}

	function onModalChange(e) {
		// sincroniza índice si el modal emite change
		modalIndex = e.detail.index;
	}
</script>

<article>
	<div class="sector_info">
		<h3>{data?.sector?.nombre}</h3>
		<p>{data?.sector?.descripcion}</p>

	</div>

	<div class="gallery" role="list">
		{#each data?.sector?.croquis || [] as item, i (item.full)}
			<figure class="card" role="listitem">
				<img
					class="thumb"
					src={item.thumb}
					alt={item.alt}
					loading="lazy"
					on:click={() => openImageAt(i)}
					tabindex="0"
					on:keydown={(e) => e.key === 'Enter' && openImageAt(i)}
				/>
				<figcaption>{item.alt}</figcaption>
			</figure>
		{/each}
	</div>
</article>

<Modal
	bind:open={modalOpen}
	{images}
	bind:index={modalIndex}
	on:close={() => (modalOpen = false)}
	on:change={onModalChange}
/>

<style>
	.sector_info{
		display: flex;	
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-bottom: 25px;
		color: #fff;
		padding: 25px 10px;
	}

	h3{
		font-size: var(--tamanhoTitulo);
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		justify-content: center;

	}
	.thumb {
		width: 100%;
		height: 110px;
		object-fit: cover;
		border-radius: 6px;
		cursor: pointer;
	}
	.card {
		padding: 0.4rem;
		border: 1px solid #eee;
		border-radius: 6px;
		background: #ffffff;
		width: 200px;
		height: auto;
	}
</style>
