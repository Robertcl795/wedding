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
	<div class="photos">
		<img class="photo border-xs" src="/photos/P25.jpg" alt="Pictures of our wedding" />
		<img class="photo border-xs" src="/photos/P26.jpg" alt="Pictures of our wedding" />
	</div>
</section>

<style>
	.countdown-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 4rem);
		padding: 2rem 1rem;
		box-sizing: border-box;
	}

	.text {
		text-align: center;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		width: 100%;
		max-width: 600px;
		margin-bottom: 2rem;
	}

	.countdown {
		width: 100%;
		max-width: 600px;
		text-align: center;
		color: white;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 4rem;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.5rem;
	}

	.timer {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		justify-content: center;
	}

	.time-unit {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		padding: 1rem;
	}

	.number {
		font-size: 2rem;
		font-weight: bold;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	.photos {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.photo {
		width: 100%;
		max-width: 300px;
		height: auto;
		border-radius: 1rem;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		.countdown-container {
			flex-direction: column;
		}

		h2 {
			font-size: 6rem;
		}

		.subtitle {
			font-size: 2rem;
		}

		.timer {
			grid-template-columns: repeat(4, 1fr);
		}

		.number {
			font-size: 2.5rem;
		}

		.photos {
			flex-direction: row;
			justify-content: center;
		}

		.photo {
			width: calc(50% - 0.5rem);
			max-width: 400px;
		}
	}
</style>