<!-- AvatarCard.svelte -->
<script>
	export let avatarUrl;
	export let name;
</script>

<div class="avatar-card flex items-center space-x-4 p-3 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg variant-glass-secondary">
	<img class="w-10 h-10 rounded-full" src={avatarUrl} alt={name} />
	<div class="text-sm font-medium">{name}</div>
</div>

<style>
  .avatar-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
</style>
