<script>
    export let info;
    export let sectores;
    export let escola;

</script>


<h2>{escola}</h2>
<nav class="nav__grande">
    <a href="/">Inicio</a>
    <a href={info}>Info</a>
    <a href={sectores}>Sectores</a>
</nav>

<nav class="nav__pequeno">
    <a href="/"><img src="/home.svg" alt="Icono inicio"></a>
    <a href={info}><img src="/info.svg" alt="Icono info"></a>
    <a href={sectores}><img src="/sectores.svg" alt="Icono sectores"></a>
</nav>

<style>
    h2{
        text-align: center;
        font-size: 35px;
		font-weight: 800;
    }

    .nav__grande{
        display: none;
        gap: 15px 15px;
        justify-content: center;
    }

    .nav__grande a{
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

    .nav__grande a:hover{
        background-color: rgb(0, 0, 0);
        color:#5DACA3;
    }

    .nav__pequeno{
        position: fixed;
        bottom: -1px;
        background-color: rgba(0, 0, 0, 0.788);
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        z-index: 100;
        padding: 5px 0;
    }


    .nav__pequeno a{
        padding:5px 20px;
    }

    .nav__pequeno a img{
        width: 35px;
        height: 35px;
    }

    .nav__pequeno a:hover{
        transform: scale(1.3);
    }

    @media (width >= 500px){
        .nav__grande{
            display:flex;
        }

        .nav__pequeno{
            display: none;
        }
    }

</style>