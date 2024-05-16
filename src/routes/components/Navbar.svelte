<script>
    export let info;
    export let sectores;

</script>

<nav>
    <a href="/">Inicio</a>
    <a href={info}>Info</a>
    <a href={sectores}>Sectores</a>
</nav>

<style>
    nav{
        display: flex;
        gap: 15px 30px;
        justify-content: center;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: 800;
        font-size: 1.2rem;
        width: 100px;
        padding: 10px;
        border: 5px solid black;
        text-align: center;
        border-radius: 5px;
    }

    a:hover{
        background-color: greenyellow;
    }
</style>