<script>
    export let tittle;
    import zonas from '../zonas.js';

    //Selector de zonas: mantén a zona activa según tittle
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
    <div class="info">
        <h3 class="titulo">{zonaSelect?.escuela}</h3>
    </div>
    <div class="footerCard">
        <p class="footerDescription">{zonaSelect?.description}</p>
        <div class="footerDetails">
            <p><strong>Sectores: </strong>{zonaSelect?.sectores}</p>
            <p><strong>Vías: </strong>{zonaSelect?.vias}</p>
            <p><strong>Grado: </strong>{zonaSelect?.grados}</p>
        </div>
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
        box-shadow: 5px 5px 5px #0000008e, inset 0px 0px 3px rgb(0, 0, 0);
        position: relative;
        background-color: black; 
        color: #fff;
        border: 5px solid #000000;
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
            transform: scale(1.02);
        }
    }

    
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        bottom: 0;
        overflow: hidden;
        border-radius: 10px;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }   

    .info{
        position: relative;
        z-index: 2;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .titulo{
        font-size: 30px;
    }

    .footerCard{
        position: absolute;
        bottom: 0;
        font-size: 14px;
        width: 100%;
        background-color: black;
        border-radius: 0px 0px 10px 10px;
        color: #fff;
    }  
    
    .footerDescription{
        font-size: 14px;
        text-align: justify;
        padding: 10px;
        border-bottom: 2px solid #ccc;
        height: 100px;
    }

    .footerDetails{
        margin-top: 10px;
        padding: 0px 10px 10px 10px;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
</style>