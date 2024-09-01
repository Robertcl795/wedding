<!-- ParallaxCover.svelte -->
<script lang="ts">
	// import { onMount } from 'svelte';
	// let y = 0;

	// onMount(() => {
	// 	const updateParallax = () => {
	// 		const section: any = document.querySelector('.parallax-container');
	// 		const rect = section.getBoundingClientRect();
	// 		y = -rect.top * 0.5;
	// 	};

	// 	window.addEventListener('scroll', updateParallax);
	// 	return () => window.removeEventListener('scroll', updateParallax);
	// });
</script>

<section id="home" class="cover-container">
	<div class="background-image" style="background-image: url('/photos/P28.jpg')"></div>
	<section class="content border-sm">
		<h1 class="cursive-1">Nuestra Boda</h1>
		<p class="garamond subtitle">Jackie & Robert</p>
	</section>
</section>

<style>
	.cover-container {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: grid;
	}

	.content {
		position: relative;
		z-index: 1;
		align-self: center;
		text-align: center;
		height: 30%;
		width: 70%;
		background-color: rgba(0, 0, 0, 0.4);
		display: grid;
		align-content: center;
		justify-self: center;
	}

	h1 {
		font-size: 10rem;
		line-height: 10rem;
		margin-bottom: 1rem;
	}

	p.subtitle {
		font-size: 5rem;
	}
	
	.background-image {
		position: absolute;
		top: 0; 
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		will-change: transform; /* Optimization for animations */
	}
</style>
