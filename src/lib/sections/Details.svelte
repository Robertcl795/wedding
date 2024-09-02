<script>
	import AvatarCard from '$components/Avatar.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import NotoV1BrideWithVeilMediumLightSkinTone from '~icons/noto-v1/bride-with-veil-medium-light-skin-tone';
	import NotoV1PersonInTuxedoLightSkinTone from '~icons/noto-v1/person-in-tuxedo-light-skin-tone';
	import NotoV1WomanAndManHoldingHands from '~icons/noto-v1/woman-and-man-holding-hands';
	import MaterialSymbolsOpenInNewSharp from '~icons/material-symbols/open-in-new-sharp';
	import NotoDress from '~icons/noto/dress';
	import NotoNecktie from '~icons/noto/necktie'

	let url1 = 'https://maps.app.goo.gl/KdQVBpUSjsmWjmND6';
	let url2 = 'https://maps.app.goo.gl/6MBigUVkfBmWLpRk6';
	let minimapImageUrl1 = '/photos/Map_1.png';
	let minimapImageUrl2 = '/photos/Map_2.png';
	let dresscodeIconSuit = 'mdi:suit';
	let dresscodeIconDress = 'mdi:dress';
	let address1 = "C. Manuel López Cotilla 935, Col Americana, Americana, 44160 Guadalajara, Jal.";
	let addressDet1 = "Parroquia El Expiatorio del Santísimo Sacramento";
	let address2 = "C. Felipe Ruvalcaba 5330, Colli Urbano, 45070 Zapopan, Jal.";
	let addressDet2 = "Salón de eventos Klariz";
	export let sections = [
		{
			title: 'Novia',
			avatarUrl: '/photos/P28.jpg',
			name: 'Jacqueline Rosales',
			icon: NotoV1BrideWithVeilMediumLightSkinTone,
			open: true,
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Madre: Carolina Trigo' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Padre: Daniel Pozos' }
			]
		},
		{
			title: 'Novio',
			avatarUrl: '/photos/P28.jpg',
			name: 'Roberto Carrillo',
			icon: NotoV1PersonInTuxedoLightSkinTone,
			open: true,
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Madre: Erika Luevano' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Padre: Jorge Carrillo' }
			]
		},
		{
			title: 'Padrinos',
			icon: NotoV1WomanAndManHoldingHands,
			name: 'Rosalina Tadeo & Roberto Luevano',
			avatarUrl: '/photos/P28.jpg',
			open: false,
			avatars: [
				{ avatarUrl: '/photos/P28.jpg', name: 'Anillo: Carolina Trigo & Manuel Saavedra' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Lazo: Angélica Ojeda & Jorge Delgado' },
				{ avatarUrl: '/photos/P28.jpg', name: 'Arras: Padrino 1 & Padrino 2' }
			]
		}
	];
</script>

<section id="details" class="details-container">
	<header class="section-header"><h1 class="text-8xl cursive-1">Detalles</h1></header>
	<div class="tree-view card variant-glass-surface card-hover overflow-hidden glow-effect">
		<TreeView padding="py-3 px-3">
			{#each sections as section}
				<TreeViewItem open={section.open}>
					<svelte:fragment slot="lead">
						<div
							class="card flex items-center space-x-4 p-3 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
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
	</div>
	<div class="dresscode card variant-glass-surface card-hover overflow-hidden glow-effect p-4">
		<header class="garamond text-4xl flex justify-center">
			<NotoDress style="font-size: 2rem" />
			<span class="px-3">
				Código de vestimenta
			</span>
			<NotoNecktie style="font-size: 2rem" />
		</header>
		<p class="text-xl btn variant-glass-primary card-hover">Formal (Color Tinto reservado para damas de honor)</p>
		
	</div>
	<div class="location">
		<div class="location-card card variant-glass-surface card-hover overflow-hidden glow-effect">
			<div class="minimap">
				<img src={minimapImageUrl1} alt="Minimap Preview" class="w-full h-auto" />
			</div>
			<footer>
				<a
					class="btn variant-glass-primary w-full px-4 py-3 text-wrap"
					href={url1}
					target="_blank"
				>
					<span class="flex flex-col">
					<span class="text-xl font-bold cursor-pointer">Ceremonia</span>
					<span class="text-base font-semibold">{addressDet1}</span>
					<span class="text-base font-semibold">{address1}</span>
					</span>
					<MaterialSymbolsOpenInNewSharp  style="font-size: 2rem;" />
				</a>
			</footer>
		</div>
		<div class="location-card card ghost card-hover overflow-hidden glow-effect">
			<div class="minimap">
				<img src={minimapImageUrl2} alt="Minimap Preview" class="w-full h-auto" />
			</div>
			<footer>
				<a
					class="btn variant-glass-primary w-full px-4 py-3 text-wrap"
					href={url2}
					target="_blank"
				>
					<span class="flex flex-col">
						<span class="text-xl font-bold cursor-pointer">Evento</span>
						<span class="text-base font-semibold">{addressDet2}</span>
						<span class="text-base font-semibold">{address2}</span>
					</span>
					<MaterialSymbolsOpenInNewSharp  style="font-size: 2rem;" />

				</a>
			</footer>
		</div>
	</div>
</section>

<style>
	section#details {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: max-content max-content 1fr;
		grid-template-areas:
			'header header'
			'treeview dresscode'
			'treeview location';
	}
	div.location {
		grid-area: location;
	}
	.section-header {
		grid-area: header;
	}
	.dresscode {
		grid-area: dresscode;
		display: grid;
		grid-template-rows: max-content 1fr;
		justify-content: center;
		gap: 1rem;
	}
	.tree-view {
		grid-area: treeview;
	}
	.location-card {
		width: 50%;
		position: relative;
		display: grid;
		grid-template-rows: max-content 1fr;
	}
	.location {
		display: flex;
		height: max-content;
		gap: 2rem;
	}
	.minimap img {
		border-radius: var(--radius-lg);
	}
	.details-container {
		height: 100%;
		padding: 2rem;
		gap: 2rem;
	}
	.section-header {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	footer > a {
		display: grid;
		grid-template-columns: 1fr max-content;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		align-items: start;
		height: 100%;
	}
	footer > a > span {
		width: 100%;
		text-align: left;
		
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
