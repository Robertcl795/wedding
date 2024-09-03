<script lang="ts">
	export let title: string = '';
	export let subtitle: string = '';
	export let color: string = 'surface';
	export let cardClass: string = '';

	let className = '';
	export { className as class };
</script>

<section class="section-container p-3 sm:p-6">
	<div {color} class="header-card card card-hover {cardClass}">
		<header class="header-text card-header cursive-1 flex flex-col items-center">
			<h2 class="title text-4xl sm:text-8xl">{title}</h2>
			<p class="subtitle garamond text-xl sm:text-4xl text-center">{subtitle}</p>
		</header>
	</div>
	<div class="content {className}">
		<slot></slot>
	</div>
</section>

<style lang="postcss">
	.content.details-container {
		max-width: 400px;
		padding: 1rem;
	}

	.section-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		justify-items: center;
	}

	.header-card {
		padding: 1rem;
		width: 100%;
	}
    .header-text {
        text-align: center;
    }

	.countdown-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
	.details-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: start;
		box-sizing: border-box;
		gap: 2rem;
	}
    .gifts-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        height: max-content;
    }

	@media (min-width: 640px) {
		.header-card {
			max-width: 70%;
		}
		.section-container {
			grid-template-rows: max-content 1fr;
            height: 100%;
		}

		.content {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
		.content.details-container {
            width: 100%;
            max-width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: max-content 1fr;
			grid-template-areas:
				'treeview dresscode'
				'treeview location';
		}
        .content.gifts-container {
            flex-direction: row;
            align-content: center;
        }
	}
</style>
