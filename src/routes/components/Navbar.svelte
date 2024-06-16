<script>
    export let info;
    export let sectores;
    export let escola;

</script>


<h2>{escola}</h2>
<nav>
    <a href="/">Inicio</a>
    <a href={info}>Info</a>
    <a href={sectores}>Sectores</a>
</nav>

<style>
    h2{
        text-align: center;
        font-size: 35px;
		font-weight: 800;
    }

    nav{
        display: flex;
        gap: 15px 15px;
        justify-content: center;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: 800;
        font-size: 1.2rem;
        width: 100px;
        padding: 10px 0;
        border: 5px solid black;
        text-align: center;
        border-radius: 5px;
    }

    a:hover{
        background-color: rgb(0, 0, 0);
        color:#5DACA3;
    }
</style>