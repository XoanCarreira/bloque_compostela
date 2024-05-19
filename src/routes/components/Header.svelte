<header>

    <img width="100px" src="/favicon_boulder02.png" alt="Logo de persoa practicando boulder">

	<h1>Boulder Compostela</h1>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 35px;
		align-items: center;
		font-size: 30px;
		font-weight: 800;
		min-height: 80px;
		background-color: #5DACA3;
	}

	@keyframes mover {
		0% {
			transform: rotate(-5deg);
			transform: skew(-5deg);
		}
		100% {
			transform: rotate(5deg);
			transform: skew(5deg);
		}
	}


	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	@media (width <= 500px){
		h1{
			display: none;
		}
	}

</style>
