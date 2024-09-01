<!-- Countdown.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';

	// Set the date we're counting down to
	export let targetDate = new Date('2025-01-01T00:00:00').getTime();

	let days, hours, minutes, seconds;
	let countdownTimer;

	function updateCountdown() {
		// Get today's date and time
		const now = new Date().getTime();

		// Find the distance between now and the target date
		const distance = targetDate - now;

		// Time calculations for days, hours, minutes and seconds
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// If the countdown is finished, clear the interval
		if (distance < 0) {
			clearInterval(countdownTimer);
			days = hours = minutes = seconds = 0;
		}
	}

	onMount(() => {
		updateCountdown(); // Initial call
		countdownTimer = setInterval(updateCountdown, 1000);
	});

	onDestroy(() => {
		if (countdownTimer) clearInterval(countdownTimer);
	});
</script>

<section id="countdown" class="countdown-container">
	
	<header class="text border-xs">
		<h2 class="title cursive-1">Estás invitado!</h2>
		<p class="subtitle garamond">Queremos que seas parte de este momento tan especial</p>
	</header>
	<div class="countdown">
		<div class="timer">
			<div class="time-unit border-xs">
				<span class="number">{days}</span>
				<span class="label">Days</span>
			</div>
			<div class="time-unit border-xs">
				<span class="number">{hours}</span>
				<span class="label">Hours</span>
			</div>
			<div class="time-unit border-xs">
				<span class="number">{minutes}</span>
				<span class="label">Minutes</span>
			</div>
			<div class="time-unit border-xs">
				<span class="number">{seconds}</span>
				<span class="label">Seconds</span>
			</div>
		</div>
	</div>
	<img class="photo border-xs" style="grid-area: photo1;" src="/photos/P25.jpg" alt="Pictures of our wedding" />
	<img class="photo border-xs" style="grid-area: photo2;" src="/photos/P26.jpg" alt="Pictures of our wedding" />
</section>

<style>
	.countdown-container {
		height: calc(100% - 4rem);
		display: grid;
		align-items: center;
		justify-items: center;
		grid-template-rows: 2fr 1fr 5fr;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "text text" "countdown countdown" "photo1 photo2";
		align-content: center;
		padding: 2rem 1rem;
	}
	section.text {
		text-align: center;
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		grid-area: text;
		width: 70%;
	}
	.countdown {
		width: 70%;
		text-align: center;
		grid-area: countdown;
		color: white;
	}

	h2 {
		font-size: 8rem;
		line-height: 8rem;
	}
	.subtitle {
		font-size: 2rem;
	}

	.timer {
		display: grid;
		justify-content: center;
		gap: 2.5rem;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.time-unit {
		display: grid;
		align-content: center;
		align-items: center;
		grid-template-rows: 1fr 2rem;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		padding: 1rem;
	}

	.number {
		font-size: 2.5rem;
		font-weight: bold;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
	}
	.photo {
		width: 80%;
		height: auto;
		border-radius: 1rem;
	}
</style>
