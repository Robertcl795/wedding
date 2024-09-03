<script lang="ts">
	import '../app.scss';
	import '../app.postcss';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Navigation from '$components/Navigation.svelte';
	import { browser } from '$app/environment';
	import MaterialSymbolsArrowCircleRightRounded from '~icons/material-symbols/arrow-circle-right-rounded';
	import MaterialSymbolsArrowCircleLeftRounded from '~icons/material-symbols/arrow-circle-left-rounded';
	import { cubicOut } from 'svelte/easing';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
	const routes = ['/home', '/countdown', '/details', '/gifts', '/rsvp'];
	let currentIndex = 0;

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

	$: currentIndex = routes.indexOf($page.url.pathname);

	let touchStartX = 0;
	let touchEndX = 0;
	let swipeProgress = 0;
	let isSwipeBlocked = false;

	function handleTouchStart(e) {
		// Check if the touch started on a blocked element
		if (e.target.closest('.block-swipe')) {
			isSwipeBlocked = true;
			return;
		}
		isSwipeBlocked = false;
		touchStartX = e.changedTouches[0].screenX;
		swipeProgress = 0;
	}

	function handleTouchMove(e) {
		if (isSwipeBlocked) return;
		touchEndX = e.changedTouches[0].screenX;
		const swipeDistance = touchEndX - touchStartX;
		const maxSwipeDistance = window.innerWidth / 2;
		swipeProgress =
			Math.min(Math.abs(swipeDistance) / maxSwipeDistance, 1) * (swipeDistance > 0 ? -1 : 1);
	}

	function handleTouchEnd(e) {
		if (isSwipeBlocked) return;
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
		swipeProgress = 0;
	}

	function handleSwipe() {
		const swipeThreshold = window.innerWidth / 4; // 25% of screen width
		const swipeDistance = touchEndX - touchStartX;

		if (Math.abs(swipeDistance) > swipeThreshold) {
			if (swipeDistance > 0 && currentIndex > 0) {
				// Swipe right, go to previous route
				goto(routes[currentIndex - 1]);
			} else if (swipeDistance < 0 && currentIndex < routes.length - 1) {
				// Swipe left, go to next route
				goto(routes[currentIndex + 1]);
			}
		}
	}

	onMount(() => {
		const mainElement: any = document.querySelector('main');
		mainElement.addEventListener('touchstart', handleTouchStart, { passive: true });
		mainElement.addEventListener('touchmove', handleTouchMove, { passive: true });
		mainElement.addEventListener('touchend', handleTouchEnd, { passive: true });

		return () => {
			mainElement.removeEventListener('touchstart', handleTouchStart);
			mainElement.removeEventListener('touchmove', handleTouchMove);
			mainElement.removeEventListener('touchend', handleTouchEnd);
		};
	});
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
	<div class="main-content">
		{#key $page.url.pathname}
			<div class="h-full" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 100 }}>
				<slot />
			</div>
		{/key}
	</div>
	{#if swipeProgress !== 0}
		<div
			class="swipe-indicator"
			style="transform: translateX({swipeProgress * 100}%)"
			in:fly={{ x: swipeProgress > 0 ? -50 : 50, duration: 200, easing: cubicOut }}
			out:fade={{ duration: 200 }}
		>
			{#if swipeProgress > 0}
				<MaterialSymbolsArrowCircleRightRounded style="font-size: 3rem;" />
			{:else}
				<MaterialSymbolsArrowCircleLeftRounded style="font-size: 3rem;" />
			{/if}
		</div>
	{/if}
	<footer slot="footer" class="grid items-center grid-cols-2 gap-4"></footer>
</AppShell>

<style>
	div.main-content {
		overflow-y: auto;
		scroll-behavior: smooth;
		height: 100%;
		display: grid;
		align-items: center;
	}
	.swipe-indicator {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 0.5rem;
		border-radius: 50%;
		pointer-events: none;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
