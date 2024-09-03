<script lang="ts">
	import Section from '$components/Section.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let targetDate = new Date('2024-10-12T12:00:00').getTime();
	export let dateText = '12 de Octubre de 2024';

	let days: number, hours: number, minutes: number, seconds: number;
	let countdownTimer: any;

	function updateCountdown() {
		const now = new Date().getTime();
		const distance = targetDate - now;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (distance < 0) {
			clearInterval(countdownTimer);
			days = hours = minutes = seconds = 0;
		}
	}

	onMount(() => {
		updateCountdown();
		countdownTimer = setInterval(updateCountdown, 1000);
	});

	onDestroy(() => {
		if (countdownTimer) clearInterval(countdownTimer);
	});
</script>

<Section
	title="Estás Invitado!"
	subtitle="Queremos que seas parte de este momento tan especial"
	color="surface"
	class="countdown-container"
>
	<div class="countdown">
		<div class="timer">
			<div class="card time-unit variant-ghost-surface">
				<span class="number">{days}</span>
				<span class="label">Days</span>
			</div>
			<div class="card time-unit variant-ghost-surface">
				<span class="number">{hours}</span>
				<span class="label">Hours</span>
			</div>
			<div class="card time-unit variant-ghost-surface">
				<span class="number">{minutes}</span>
				<span class="label">Minutes</span>
			</div>
			<div class="card time-unit variant-ghost-surface">
				<span class="number">{seconds}</span>
				<span class="label">Seconds</span>
			</div>
		</div>
	</div>
	<div class="date card variant-ghost-surface">
		<p class="garamond">{dateText}</p>
	</div>
	<div class="photos block-swipe">
		<img class="photo variant-ghost-surface" src="/photos/P25.jpg" alt="Pictures of our wedding" />
		<img class="photo variant-ghost-surface" src="/photos/P26.jpg" alt="Pictures of our wedding" />
		<img class="photo variant-ghost-surface" src="/photos/P15.jpg" alt="Pictures of our wedding" />
		<img class="photo variant-ghost-surface" src="/photos/P8.jpg" alt="Pictures of our wedding" />
		<img class="photo variant-ghost-surface" src="/photos/P6.jpg" alt="Pictures of our wedding" />
		<img class="photo variant-ghost-surface" src="/photos/P10.jpg" alt="Pictures of our wedding" />
	</div>
</Section>

<style>
	/* Mobile-first styles */
	

	.text {
		text-align: center;
		padding: 2rem;
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
		font-size: 1.5rem;
		font-weight: bold;
	}

	.label {
		font-size: 0.75rem;
		text-transform: uppercase;
	}

	.photos {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		width: 100%;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.photo {
		width: 100%;
		max-width: 100%;
		height: auto;
		border-radius: 1rem;
		object-fit: cover;
		scroll-snap-align: start;
	}

	.date {
		width: 100%;
		padding: 1rem;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		margin-bottom: 2rem;
		text-align: center;
	}

	.date p {
		font-size: 1.5rem;
	}

	/* Styles for tablets and larger screens */
	@media (min-width: 768px) {
		.timer {
			grid-template-columns: repeat(4, 1fr);
		}

		.number {
			font-size: 2rem;
		}

		.photos {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			width: 100%;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
		}

		.photo {
			width: calc(49% - 0.5rem);
			max-width: 400px;
		}

		.date p {
			font-size: 2rem;
		}
	}

	/* Styles for larger desktops */
	@media (min-width: 1024px) {
		.countdown,
		.date {
			max-width: 70%;
		}

		.photos {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			width: 100%;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			margin: 0 2rem;
		}

		.photo {
			width: calc(40% - 0.5rem);
			max-width: none;
			height: auto;
			object-fit: cover;
		}
	}
</style>
