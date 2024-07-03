<script>
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	let visible = false;

</script>

<div>
	<!--Botón hamburguesa/X para menú-->
	<label>
		<input type="checkbox" bind:checked={visible} />
		{#if visible}
			<span class="span__x" in:fade out:fade>X</span>
		{/if}
		<span>&#9776;</span>
	</label>

	<!--Menú despregable-->
	{#if visible}
		<nav transition:fly={{ y: -200, duration: 800 }}>
			<ul>
				<li><a href="../">Inicio</a></li>
				<li><a href="../recorda">Recorda</a></li>
				<li><a href="../novas">Novas</a></li>
				<li><a href="../boulder_compostela">Boulder Compostela</a></li>
			</ul>
		</nav>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 25px;
		left: 15px;
	}

	span {
		font-size: 2rem;
		border-radius: 5px;
		background-color: #000;
		color: #fff;
		width: 50px;
		height: 50px;
		padding: 5px 10px;
	}

	.span__x {
		position: absolute;
		background-color: #000;
		width: 48px;
		height: 45px;
		text-align: center;
	}

	label{
		cursor: pointer;
	}

	input {
		display: none;
	}

	nav {
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

	a:hover {
		background-color: #ffffff;
		color: #000;
		font-weight: 700;
		padding: 0 8px;
	}
</style>
