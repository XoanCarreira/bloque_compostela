<script>
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	let visible = false;
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={visible} />
		{#if visible}
		<span class="span__x" in:fade out:fade>X</span>
		<!-- {:else} -->
		{/if}
		<span >&#9776;</span>
	</label>

	{#if visible}
		<nav transition:fly={{ y: -200, duration: 1000 }}>
			<ul>
				<li><a href="./">Inicio</a></li>
				<li><a href="./recorda">Recorda</a></li>
				<li><a href="./novidades">Novidades</a></li>
				<li><a href="./">Consellos</a></li>
				<li><a href="./">Agradecementos</a></li>
				<li><a href="./">Boulder Compostela</a></li>
			</ul>
		</nav>
	{/if}
</div>

<style>
	div {
		/* width: 55px;
		height: 55px; */
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 10px;
		left: 10px;
	}

	span {
		/* border: 5px solid #fff; */
		font-size: 3rem;
		border-radius: 5px;
		background-color: #000;
		color: #fff;
		width: 50px;
		height: 50px;
		padding: 0 10px;
	}

	.span__x{
		padding: 0 20px;
		position: absolute;
		background-color: #000;
		width: 50px;
		height: 64px;
		text-align: center;
	}

	/* label {
		height: 50px;
		width: 50px;
	
	} */

	input {
		display: none;
	}

	nav {
		/* display: none; */
		width: 300px;
		padding: 15px;
		background-color: #000;
		z-index: 500;
		border-radius: 5px;
	}

	ul,
	li {
		list-style-type: none;
		text-align: center;
		margin-bottom: 10px;
	}

	a {
		text-decoration: none;
		font-size: 1.3rem;
		color: #fff;
	}

	a:hover{
		background-color: #ffffff;
		color: #000;
		font-weight: 700;
		padding: 0 8px;
	}
</style>
