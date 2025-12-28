<script>
    import Card from "./components/Card.svelte";
    import zonas from './zonas.js';
</script>

<main>

    <!--Xeración de tarxetas/botóns segundo a lista de zonas-->
    {#each zonas as zona}
        <a href={zona.ruta}><Card tittle={zona.escuela}/></a>
    {/each}

</main>

<style>
    main{
        /*background-color: #5DACA3;*/
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        padding: 15px;
        min-height: 76vh;
    }

    a{
        border-radius: 10px;
        text-decoration: none;
    }

</style>