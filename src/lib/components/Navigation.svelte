<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const classes = 'btn btn-sm variant-glass-surface w-full lg:w-auto p-4';

	function drawerClose(): void {
		drawerStore.close();
	}
	
</script>

<ul class="navigation--sidebar">
	<li><a class={classes} on:click={drawerClose} href="#home">Inicio</a></li>
	<li><a class={classes} on:click={drawerClose} href="#countdown">Cuenta regresiva</a></li>
	<li><a class={classes} on:click={drawerClose} href="#details">Detalles</a></li>
	<li><a class={classes} on:click={drawerClose} href="#location">Ubicación</a></li>
	<li><a class={classes} on:click={drawerClose} href="#schedule">Itinerario</a></li>
	<li><a class={classes} on:click={drawerClose} href="#gifts">Regalos</a></li>
	<li><a class={classes} on:click={drawerClose} href="#rsvp">Confirmación</a></li>
	<li><a class={classes} on:click={drawerClose} href="#stay">Hospedaje</a></li>
	<li><a class={classes} on:click={drawerClose} href="#our-story">Nuestra historia</a></li>
</ul>

<style>
	.navigation--sidebar {
		display: grid;
		align-content: space-between;
		height: calc(100vh - 6rem);
		margin: 1rem;
	}
</style>