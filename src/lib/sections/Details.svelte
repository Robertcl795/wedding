<script>
	import AvatarCard from '$components/Avatar.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
    import NotoV1BrideWithVeilMediumLightSkinTone from '~icons/noto-v1/bride-with-veil-medium-light-skin-tone';
    import NotoV1PersonInTuxedoLightSkinTone from '~icons/noto-v1/person-in-tuxedo-light-skin-tone';
    import NotoV1WomanAndManHoldingHands from '~icons/noto-v1/woman-and-man-holding-hands';
	export let sections = [
		{
			title: 'Novia',
            avatarUrl: '/photos/P28.jpg',
            name: 'Jacqueline Rosales',
            icon: NotoV1BrideWithVeilMediumLightSkinTone,
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Carolina Trigo' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Daniel Pozos' }
			]
		},
		{
			title: 'Novio',
            avatarUrl: '/photos/P28.jpg',
            name: 'Roberto Carrillo',
            icon: NotoV1PersonInTuxedoLightSkinTone,
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Erika Luevano' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Jorge Carrillo' }
			]
		},
		{
			title: 'Padrinos',
            icon: NotoV1WomanAndManHoldingHands,
            name: 'Rosalina Tadeo & Roberto Luevano',
            avatarUrl: '/photos/P28.jpg',
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Anillo: Padrino 1 & Padrino 2' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Lazo: Angélica Ojeda & Jorge Delgado' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Arras: Padrino 1 & Padrino 2' },
			]
		}
	];
</script>

<section id="details" class="details-container">
	<header><h1 class="text-8xl cursive-1">Detalles</h1></header>
	<TreeView>
		{#each sections as section}
			<TreeViewItem open>
				<svelte:fragment slot="lead">
					<div class="card flex items-center space-x-4 p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <svelte:component this={section.icon} class="icon" style="font-size: 2rem;" />
                        <p class="text-xl">{section.title}</p>
                    </div>
				</svelte:fragment>
                <AvatarCard avatarUrl={section.avatarUrl} name={section.name} />
				<svelte:fragment slot="children">
					{#each section.avatars as avatar}
						<TreeViewItem>
							<svelte:fragment slot="lead">
                                <AvatarCard avatarUrl={avatar.avatarUrl} name={avatar.name} />
							</svelte:fragment>
						</TreeViewItem>
					{/each}
				</svelte:fragment>
			</TreeViewItem>
		{/each}
	</TreeView>
</section>

<style>
	.details-container {
		height: 100%;
		padding: 2rem;
		gap: 2rem;
	}
	header {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.glow-effect {
		position: relative;
		animation: glow 1.5s infinite ease-in-out;
	}

	@keyframes glow {
		0% {
			box-shadow: 0 0 5px rgba(255, 105, 180, 0.7);
		}
		50% {
			box-shadow: 0 0 8px rgba(255, 105, 180, 1);
		}
		100% {
			box-shadow: 0 0 5px rgba(255, 105, 180, 0.7);
		}
	}
</style>
