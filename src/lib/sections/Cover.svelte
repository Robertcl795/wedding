<!-- Cover.svelte -->
<script lang="ts">
</script>

<section id="home" class="parallax-container">
	<div 
	  class="background-image" 
	  style="background-image: url('/photos/P28.jpg');"
	></div>
	<div class="content-wrapper">
	  <div class="content border-sm">
		<h1 class="cursive-1">Nuestra Boda</h1>
		<p class="garamond subtitle">Jackie & Robert</p>
	  </div>
	</div>
</section>
  
  <style>
	.parallax-container {
	  height: calc(100vh - 4rem);
	  width: 100%;
	  overflow: hidden;
	  position: relative;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
  
	.content-wrapper {
	  position: relative;
	  z-index: 1;
	  width: 90%;
	  max-width: 1200px;
	}
  
	.content {
	  background-color: rgba(0, 0, 0, 0.4);
	  padding: 2rem;
	  text-align: center;
	}
  
	h1 {
	  font-size: clamp(3rem, 10vw, 10rem);
	  line-height: 1.1;
	  margin-bottom: 0.5rem;
	}
  
	p.subtitle {
	  font-size: clamp(1.5rem, 5vw, 5rem);
	  line-height: 1.2;
	}
  
	.background-image {
	  position: absolute;
	  top: 0; 
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-size: cover;
	  background-position: calc(50% + 4rem) center;  /* Adjusted position */
	  will-change: transform;
	}
  
	@media (max-width: 768px) {
	  .background-image {
		background-size: auto 100%;
	  }
	}
  </style>