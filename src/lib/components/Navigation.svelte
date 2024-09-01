<script lang="ts">
	import { onMount } from 'svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	let currentPath: string = '';
	
	// Update currentPath whenever the page store changes
	$: currentPath = $page.url.hash;

	const navItems = [
		{ href: '#home', label: 'Inicio' },
		{ href: '#countdown', label: 'Cuenta regresiva' },
		{ href: '#details', label: 'Detalles' },
		{ href: '#location', label: 'Ubicación' },
		{ href: '#schedule', label: 'Itinerario' },
		{ href: '#gifts', label: 'Regalos' },
		{ href: '#rsvp', label: 'Confirmación' },
		{ href: '#stay', label: 'Hospedaje' },
		{ href: '#our-story', label: 'Nuestra historia' }
	];
</script>

<ul class="lg:flex lg:space-x-2 space-y-2 lg:space-y-0 p-4 lg:p-0">
	{#each navItems as item}
		<li>
			<a
				class="btn btn-sm w-full lg:w-auto {currentPath === item.href
					? 'variant-filled-primary'
					: 'variant-glass-surface'}"
				on:click={drawerClose}
				href={item.href}
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>
