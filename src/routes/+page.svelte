<!-- src/routes/+page.svelte -->
<script>
	import Countdown from "$sections/Countdown.svelte";
	import Cover from "$sections/Cover.svelte";
	import Details from "$sections/Details.svelte";
	import Gifts from "$sections/Gifts.svelte";
	import Location from "$sections/Location.svelte";
	import PhotoCarousel from "$sections/PhotoCarousel.svelte";
	import Rsvp from "$sections/RSVP.svelte";


	const weddingDate = new Date('2024-10-12T12:00:00').getTime();
</script>

<main class="snap-container">
	<section class="snap-section">
		<Cover />
	</section>
	<section class="snap-section">
		<Countdown targetDate={weddingDate} dateText="12 de Octubre de 2024" />
	</section>
	<section class="snap-section">
		<Details />
	</section>
	<section class="snap-section">
		<Location />
	</section>
	<section class="snap-section">
		<Gifts />
	</section>
	<section class="snap-section">
		<Rsvp />
	</section>
	<!-- Add more sections for each component -->
</main>

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
	}

	/* For Firefox */
	@supports (-moz-appearance: none) {
		.snap-container {
			scroll-snap-type: y proximity;
		}
	}
</style>