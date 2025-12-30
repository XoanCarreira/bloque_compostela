<div>
    <!--Botón hamburguesa-->
    <input type="checkbox" id="btn_menu">
    <label for="btn_menu" class="btn_menu">
        <span id="btn_span_1" class="btn_span"></span>
        <span id="btn_span_2" class="btn_span"></span>
        <span id="btn_span_3" class="btn_span"></span>
    </label>

    <!--Menú desplegable-->
    <div class="container_flex">
        <nav>
            <ul class="container_menu flex_column">
                <li><a href="../zonas">Inicio</a></li>
				<li><a href="../recorda">Recorda</a></li>
				<li><a href="../novas">Novas</a></li>
				<li><a href="../boulder_compostela">Boulder Compostela</a></li>
            </ul>
        </nav>
    </div>
</div>


<style>

    li{
        list-style: none;
    }

    a{
        color: black;
        text-decoration: none;
    }

    a:hover{
        background-color: #000;
        color: white;
        border-radius: 5px;
        padding: 3px 5px;
    }

    #btn_menu{
        display: none;
    }

    .btn_menu{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #btn_menu, .btn_menu{
        position: absolute;
        top: 30px;
        left: 20px;
        z-index:3;
    }

    .btn_menu{
        width: 40px;
        height: 40px;
        transition: all .3s ease;
    }

    .btn_span{
        position:absolute;
        border-radius: 5px;
        top: 0;
        width: 30px;
        height: 5px;
        background-color: #000;
        transition: all .3s 0.1s ease;
    }

    .btn_span:nth-child(2){
        top: 10px;
    }
    
    .btn_span:nth-child(3){
        top: 20px;
    }

    #btn_menu:checked ~ .btn_menu #btn_span_1{
        top: 10px;
        transform: rotate(45deg);
    }
    #btn_menu:checked ~ .btn_menu #btn_span_2{
        opacity: 0;
    }
    #btn_menu:checked ~ .btn_menu #btn_span_3{
        top: 10px;
        transform: rotate(-45deg);
    }

    .container_menu{
        background-color: white;
        width: 200px;
        height: 200px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: absolute;
        top: 20px;
        left: -250px;
        transition: all .5s ease;
        z-index: 2;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
    }

    #btn_menu:checked ~ .container_flex .container_menu{
        left: 0px;
    }

</style>