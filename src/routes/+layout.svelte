<script lang="ts">
	import '../app.css';
	import '../app.postcss';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navigation from '$components/Navigation.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer>
	<h2 class="p-4">Menú</h2>
	<hr />
	<Navigation />
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">R & J</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="hidden lg:block">
					<Navigation />
				</nav>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>