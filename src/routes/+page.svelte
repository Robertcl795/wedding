<!-- src/routes/+page.svelte -->
<script>
	import ShootingStar from '$components/ShootingStar.svelte';
	import StarryBackground from '$components/StarryBackground.svelte';
	import Countdown from '$sections/Countdown.svelte';
	import Cover from '$sections/Cover.svelte';
	import Details from '$sections/Details.svelte';
	import Gifts from '$sections/Gifts.svelte';
	import Location from '$sections/Location.svelte';
	import PhotoCarousel from '$sections/PhotoCarousel.svelte';
	import Rsvp from '$sections/RSVP.svelte';

	const weddingDate = new Date('2024-10-12T12:00:00').getTime();
</script>

<div id="stars1"></div>
<div id="stars2"></div>
<div id="stars3"></div>
<div class="relative snap-container">
	<!-- <StarryBackground /> -->
	<section class="snap-section z-20">
		<Cover />
	</section>
	<section class="snap-section z-20">
		<Countdown targetDate={weddingDate} dateText="12 de Octubre de 2024" />
	</section>
	<section class="snap-section z-20">
		<Details />
	</section>
	<section class="snap-section z-20">
		<Location />
	</section>
	<section class="snap-section z-20">
		<Gifts />
	</section>
	<section class="snap-section z-20">
		<Rsvp />
	</section>
	<!-- Add more sections for each component -->
</div>

<style>
	.snap-container {
		height: calc(100vh - 4rem);
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
	}

	.snap-section {
		height: calc(100vh - 4rem);
		scroll-snap-align: start;
		scroll-snap-stop: always;
		background-color: transparent;
	}

	/* For Firefox */
	@supports (-moz-appearance: none) {
		.snap-container {
			scroll-snap-type: y proximity;
		}
	}
</style>
