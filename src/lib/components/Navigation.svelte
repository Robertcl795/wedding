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
	$: currentPath = $page.url.pathname;

	const navItems = [
		{ href: '/home', label: 'Inicio' },
		{ href: '/countdown', label: 'Cuenta regresiva' },
		{ href: '/details', label: 'Detalles' },
		{ href: '/gifts', label: 'Regalos' },
		{ href: '/rsvp', label: 'Confirmación' }
	];
</script>

<ul class="lg:flex lg:space-x-2 space-y-6 lg:space-y-0 p-4 lg:p-0">
	{#each navItems as item}
		<li>
			<a
				class="btn btn-sm w-full lg:w-auto p-4 {currentPath === item.href
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
