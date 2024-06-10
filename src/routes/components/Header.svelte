<header>
	<img src="/favicon_limpio.svg" alt="Logo de persoa practicando boulder" />

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
		background-color: #5daca3;
	}

	h1 {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}

	@media (width <= 500px) {
		h1 {
			display: none;
			/* position: absolute;
			z-index: 0;
			opacity: 0.7;
			font-size: 2rem;
			filter: blur(1px);
			text-shadow: 0px 0px 15px rgb(0, 0, 0);
			max-width: 300px;
			animation: mover 10s linear 0s infinite alternate; */
		}

		@keyframes mover {
			0% {
				/* transform: rotate(-5deg);
				transform: skew(-5deg); */
				left: -500px;
			}
			100% {
				/* transform: rotate(5deg);
				transform: skew(5deg); */
				left: 500px;
			}
		}

		img{
			z-index: 1;
		}

	
	}
</style>
