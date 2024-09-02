<script lang="ts">
	import '../app.scss';
	import '../app.postcss';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navigation from '$components/Navigation.svelte';
	import { browser } from '$app/environment';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
	const routes = ['/home', '/countdown', '/details', '/gifts', '/rsvp'];
	let currentIndex = 0;
	let mainElement: any;
	let isAtBottom = false;
	let lastScrollTop = 0;

	$: {
		// Update currentIndex whenever the route changes
		const newIndex = routes.indexOf($page.url.pathname);
		if (newIndex !== -1) {
			currentIndex = newIndex;
		} else if (browser) {
			// Only navigate on the client side
			goto('/home');
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('wheel', handleScroll, { passive: false });
			window.addEventListener('touchmove', handleTouchMove, { passive: false });
			window.addEventListener('touchend', handleTouchEnd, { passive: false });
		}

		return () => {
			if (browser) {
				window.removeEventListener('wheel', handleScroll);
				window.removeEventListener('touchmove', handleTouchMove);
				window.removeEventListener('touchend', handleTouchEnd);
			}
		};
	});

	function isScrolledToBottom() {
		if (!browser || !mainElement) return false;
		const threshold = 5; // pixels from bottom
		return mainElement.scrollHeight - mainElement.scrollTop <= mainElement.clientHeight + threshold;
	}

	function handleScroll(event) {
		if (!browser) return;
		event.preventDefault();
		const scrollDown = event.deltaY > 0;

		if (scrollDown && isScrolledToBottom()) {
			if (currentIndex < routes.length - 1) {
				currentIndex++;
				goto(routes[currentIndex]);
			}
		} else if (!scrollDown && mainElement.scrollTop === 0) {
			if (currentIndex > 0) {
				currentIndex--;
				goto(routes[currentIndex]);
			}
		} else {
			mainElement.scrollTop += event.deltaY;
		}
	}

	function handleTouchMove(event) {
		if (!browser || !mainElement) return;
		const currentScrollTop = mainElement.scrollTop;

		if (currentScrollTop > lastScrollTop) {
			// Scrolling down
			if (isScrolledToBottom()) {
				isAtBottom = true;
			}
		} else if (currentScrollTop < lastScrollTop) {
			// Scrolling up
			isAtBottom = false;
		}

		lastScrollTop = currentScrollTop;
	}

	function handleTouchEnd(event) {
		if (!browser) return;
		if (isAtBottom && currentIndex < routes.length - 1) {
			currentIndex++;
			goto(routes[currentIndex]);
		} else if (mainElement && mainElement.scrollTop === 0 && currentIndex > 0) {
			currentIndex--;
			goto(routes[currentIndex]);
		}
		isAtBottom = false;
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
	<main bind:this={mainElement}>
		{#key $page.url.pathname}
			<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
				<slot />
			</div>
		{/key}
	</main>
</AppShell>

<style>
	main {
		height: 100vh;
		overflow-y: auto;
		scroll-behavior: smooth;
	}
</style>
