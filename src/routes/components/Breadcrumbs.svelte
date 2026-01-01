<script>
	import { page } from '$app/stores';
	
	$: segments = $page.url.pathname.split('/').filter(Boolean);
	
	// Mapeo de nombres amigables
	const nameMap = {
		'zonas': 'Zonas',
		'recorda': 'Recorda',
		'novas': 'Novas',
		'boulder_compostela': 'Boulder Compostela',
		'almacen': 'Almacén',
		'eucaliptos': 'Eucaliptos',
		'lampai': 'Lampai',
		'pedroso': 'Pedroso',
		'sura': 'Sura',
		'vilas': 'Vilas',
		'biofilia': 'Biofilia'
	};
	
	function getFriendlyName(segment) {
		// Reemplazar guiones bajos con espacios y capitalizar
		return nameMap[segment] || segment.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
	}
	
	function buildPath(index) {
		return '/' + segments.slice(0, index + 1).join('/');
	}
</script>

{#if segments.length > 0}
	<nav class="breadcrumbs" aria-label="Breadcrumb">
		<ol>
			<li>
				<a href="/zonas/">Inicio</a>
			</li>
			{#each segments as segment, i}
				<li>
					<span class="separator">›</span>
					{#if i === segments.length - 1}
						<span class="current">{getFriendlyName(segment)}</span>
					{:else}
						<a href={buildPath(i)}>{getFriendlyName(segment)}</a>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}

<style>
	.breadcrumbs {
		padding: 0px 20px;
		background-color: transparent;
	}

	ol {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
		margin: 0;
		padding: 0;
	}

	li {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
	}

	a {
		color: var(--corAzul);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	a:hover {
		color: #004499;
		text-decoration: underline;
	}

	.separator {
		color: #666;
		font-size: 16px;
		user-select: none;
	}

	.current {
		color: #cacaca;
		font-weight: 600;
	}

	@media (max-width: 600px) {
		.breadcrumbs {
			padding: 0px 15px;
		}

		li {
			font-size: 12px;
		}

		.separator {
			font-size: 14px;
		}
	}
</style>
