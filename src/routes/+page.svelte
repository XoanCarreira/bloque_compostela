<script>
    import Card from "./components/Card.svelte";
</script>

<main>
    <a href="/eucaliptos"><Card tittle="Eucaliptos-free"/></a>
    <a href="/figueiras"><Card tittle="Figueiras"/></a>
    <a href="/lampai"><Card tittle="Lampai"/></a>
    <a href="/sura"><Card tittle="Sura"/></a>
    <a href="/vilas"><Card tittle="Vilas"/></a>

</main>

<style>
    main{
        background-color: rgb(219, 217, 217);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        padding: 15px;
    }

    a{
        background-color: rgb(72, 82, 221);
        border-radius: 10px;
        text-decoration: none;
        color: #ffffff;
    }

</style>