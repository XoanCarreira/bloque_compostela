<script>
    import Card from "./components/Card.svelte";
    import zonas from './zonas.js';
</script>

<main>
    <!-- <a href="/eucaliptos"><Card tittle="Eucaliptos-free"/></a> -->
    <!-- <a href="/"><Card tittle="Figueiras"/></a> -->

    <!-- <a href="/"><Card tittle="Sura"/></a>
    <a href="/"><Card tittle="Vilas"/></a> -->

    {#each zonas as zona}
        <a href={zona.ruta}><Card tittle={zona.escuela}/></a>
    {/each}

</main>

<style>
    main{
        background-color: #5DACA3;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        padding: 15px;
    }

    a{
        border-radius: 10px;
        text-decoration: none;
    }

</style>