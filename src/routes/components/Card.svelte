<script>
    export let tittle;
    import zonas from '../zonas.js';

    //Selector de zonas: mantiene la zona activa según tittle
    let zonaSelect = zonas[0];
    $: zonaSelect = zonas.find((zona) => zona.escuela === tittle) ?? zonas[0];

</script>


<!--Tarxeta/botón para identificar cada escola/sector-->
<!--
    Recibe como prop o título da escola/sector
    Segundo o título, busca na lista de zonas a información correspondente
    e amósaa na tarxeta
-->

<div class="card">
    <div class="overlay">
        <img src={zonaSelect?.image} alt="Foto zona escalada {zonaSelect?.escuela}">
    </div>
    <h3 class="titulo">{zonaSelect?.escuela}</h3>
    <div class="info">
        <p>{zonaSelect?.description}</p>
    </div>
    <div class="footerCard">
        <p><strong>Sectores: </strong>{zonaSelect?.sectores}</p>
        <p><strong>Vías: </strong>{zonaSelect?.vias}</p>
        <p><strong>Grado: </strong>{zonaSelect?.grados}</p>
    </div>
</div>


<style>
    .card{
        width: 300px;
        height: 450px;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
        box-shadow: 5px 5px 5px #0000008e, inset 0px 0px 3px white;
        position: relative;
        background-color: #000;
        color: #fff;
    }

    .card:hover{
        animation: zoomIn 0.3s ease-in-out 0s 1 normal forwards;
    }
    /* Define animación tarxeta */
    @keyframes zoomIn {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.05);
        }
    }

    .titulo{
        font-size: 30px;
        text-align: center;
    }

    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        bottom: 0;
        overflow: hidden;
        border-radius: 10px;
        background-color: black;
        z-index: -1;
    }

    .footerCard{
        position: absolute;
        bottom: 0;
        padding: 10px;
        font-size: 14px;
        display: flex;
        justify-content: space-around;
        width: 100%;
        background-color: black;
        border-radius: 0px 0px 10px 10px;
        color: #fff;
    }   


</style>