<script>
	export let data;

</script>

<!-- Lista de zonas con enlaces a sus páginas individuales -->
 <div class="container">
     <div class="grid">
         {#each data.zonas as z}
             <a class="card" href={`/zonas/${z.slug}`}>
                 <div class="overlay">
                     <img src={z.portada} alt="Foto zona escalada {z.nome}" />
                 </div>
                 <div class="info">
                     <h3 class="titulo">{z.nome}</h3>
                 </div>
                 <div class="footerCard">
                     <p class="footerDescription">{z.descripcion}</p>
                     <div class="footerDetails">
                         <p><strong>Sectores: </strong>{z.sectores}</p>
                         <p><strong>Vías: </strong>{z.vias}</p>
                         <p><strong>Aprox.: </strong>{z.aproximacion}</p>
                     </div>
                 </div>
             </a>
         {/each}
     </div>

 </div>

<style>
    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

	.grid {
        width: 100%;
		display: flex;
		gap: 20px;
        padding: 20px 20px;
        align-items: center;
		margin-top: 20px;
        overflow-x: auto;
        flex-wrap: nowrap;
        flex-shrink: 0;
        scroll-snap-type: x mandatory;


	}

	.card{
		text-decoration: none;
        width: 300px;
        height: 450px;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        place-content: center;
        box-shadow: 5px 5px 5px #000000cb, inset 0px 0px 3px rgb(0, 0, 0);
        position: relative;
        background-color: black; 
        color: #fff;
        border: 5px solid #000000;
        flex-shrink: 0;

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
			box-shadow: 3px 3px 8px #000000af, inset 0px 0px 3px rgb(0, 0, 0);
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
