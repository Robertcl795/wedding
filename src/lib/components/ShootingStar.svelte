<script>
    import { M } from 'svelte-motion'
    import { onMount } from 'svelte';
  
    let starPosition = { x: -10, y: Math.random() * 100 };
    let visible = false;
  
    onMount(() => {
      const interval = setInterval(() => {
        starPosition = { x: -10, y: Math.random() * 100 };
        visible = true;
        setTimeout(() => {
          visible = false;
        }, 1000);
      }, 3000);
  
      return () => clearInterval(interval);
    });
  </script>
  
  {#if visible}
    <M.div
      class="absolute w-2 h-2 bg-white rounded-full"
      animate={{
        x: ['0%', '120%'],
        y: [starPosition.y + '%', starPosition.y + '%'],
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    />
  {/if}