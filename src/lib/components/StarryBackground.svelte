<script lang="ts">
  import { onMount } from 'svelte';
  import { M } from 'svelte-motion';

  let stars: any = [];
  const starCount = 100;

  function createStar() {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      flickerDuration: Math.random() * 3 + 1
    };
  }

  onMount(() => {
    stars = Array(starCount).fill().map(createStar);
  });
</script>

<div class="fixed inset-0 bg-gradient-to-b from-black to-blue-900">
  {#each stars as star}
    <M.div
      class="absolute rounded-full bg-white"
      style="left: {star.x}%; top: {star.y}%;"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{
        duration: star.flickerDuration,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div style="width: {star.size}px; height: {star.size}px;" />
    </M.div>
  {/each}
</div>