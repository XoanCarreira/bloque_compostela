<script>
  import Modal from '$lib/Modal.svelte';
  export let data;

  let modalOpen = false;
  let modalSrc = '';
  let modalAlt = '';

  function openImage(item) {
    modalSrc = item.full;
    modalAlt = item.alt || '';
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    modalSrc = '';
    modalAlt = '';
  }
</script>

<style>
  .gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:8px; }
  .thumb { display:block; width:100%; height:120px; object-fit:cover; border-radius:6px; cursor:pointer; }
  .card { padding:.5rem; border:1px solid #eee; border-radius:6px; background:#fff; }
</style>

<article>
  <h3>{data.sector.nombre}</h3>
  <p>{data.sector.descripcion}</p>

  <h4>Croquis</h4>
  <div class="gallery" role="list">
    {#each data.sector.croquis as item (item.full)}
      <figure class="card" role="listitem">
        <img
          class="thumb"
          src={item.thumb}
          alt={item.alt}
          loading="lazy"
          width="320"
          height="200"
          on:click={() => openImage(item)}
          on:keydown={(e) => e.key === 'Enter' && openImage(item)}
          tabindex="0"
          />
        <figcaption>{item.alt}</figcaption>
      </figure>
    {/each}
  </div>
</article>

<Modal bind:open={modalOpen} src={modalSrc} alt={modalAlt} on:close={closeModal} />
