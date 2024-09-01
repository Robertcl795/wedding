<!-- StarryBackground.svelte -->
<script lang="ts">
  import Particles from "@tsparticles/svelte";
  import { loadStarsPreset } from "@tsparticles/preset-stars";

  let particlesInitialized = false;

  const particlesInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  const particlesLoaded = async (container) => {
    particlesInitialized = true;
  };

  const options: any = {
    preset: "stars",
    background: {
      color: {
        value: "#000"
      }
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    }
  };
</script>

<Particles
  id="tsparticles"
  options={options}
  on:particlesInit={particlesInit}
  on:particlesLoaded={particlesLoaded}
/>
