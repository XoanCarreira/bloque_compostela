<script>
    export let tittle;

</script>


<!--Tarxeta/botón para identificar cada escola/sector-->
<div class="card">
    <h3 class="titulo">{tittle}</h3>
</div>

<style>
    .card{
        width: 300px;
        height: 150px;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
        box-shadow: 5px 5px 5px #0000008e, inset 0px 0px 3px white;
    }

    .card:hover{
        opacity: 0.5;
    }

    .titulo{
        font-size: 30px;
        text-align: center;
    }
</style>