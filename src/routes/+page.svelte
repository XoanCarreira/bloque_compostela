<script>
    import Card from "./components/Card.svelte";
</script>

<main>
    <!-- <a href="/eucaliptos"><Card tittle="Eucaliptos-free"/></a> -->
    <!-- <a href="/"><Card tittle="Figueiras"/></a> -->
    <a href="/almacen"><Card tittle="Almacén"/></a>
    <a href="/lampai"><Card tittle="Lampai"/></a>
    <!-- <a href="/"><Card tittle="Sura"/></a>
    <a href="/"><Card tittle="Vilas"/></a> -->

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
        background-color: rgb(0, 0, 0);
        border-radius: 10px;
        text-decoration: none;
        color: #ccc;
    }

</style>