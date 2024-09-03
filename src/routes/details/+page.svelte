<script lang="ts">
	import AvatarCard from '$components/Avatar.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import NotoV1BrideWithVeilMediumLightSkinTone from '~icons/noto-v1/bride-with-veil-medium-light-skin-tone';
	import NotoV1PersonInTuxedoLightSkinTone from '~icons/noto-v1/person-in-tuxedo-light-skin-tone';
	import NotoV1WomanAndManHoldingHands from '~icons/noto-v1/woman-and-man-holding-hands';
	import MaterialSymbolsOpenInNewSharp from '~icons/material-symbols/open-in-new-sharp';
	import NotoRing from '~icons/noto/ring'
	import NotoHeartWithRibbon from '~icons/noto/heart-with-ribbon'
	import NotoCoin from '~icons/noto/coin'
	import NotoMoneyWithWings from '~icons/noto/money-with-wings'
	import NotoWomanFeedingBaby from '~icons/noto/woman-feeding-baby'
	import NotoManFeedingBaby from '~icons/noto/man-feeding-baby'
	import NotoDress from '~icons/noto/dress';
	import NotoNecktie from '~icons/noto/necktie';
	import Section from '$components/Section.svelte';

	let url1 = 'https://maps.app.goo.gl/KdQVBpUSjsmWjmND6';
	let url2 = 'https://maps.app.goo.gl/6MBigUVkfBmWLpRk6';
	let minimapImageUrl1 = '/photos/Map_1.png';
	let minimapImageUrl2 = '/photos/Map_2.png';
	let dresscodeIconSuit = 'mdi:suit';
	let dresscodeIconDress = 'mdi:dress';
	let address1 = 'C. Manuel López Cotilla 935, Col Americana';
	let addressDet1 = 'Parroquia El Expiatorio del Santísimo Sacramento';
	let address2 = 'C. Felipe Ruvalcaba 5330, Colli Urbano.';
	let addressDet2 = 'Salón de eventos Klariz';
	export let sections: any = [
		{
			title: 'Jacqueline Rosales',
			icon: NotoV1BrideWithVeilMediumLightSkinTone,
			open: true,
			avatars: [
				{ icon: NotoWomanFeedingBaby, name: 'Madre: Carolina Trigo' },
				{ icon: NotoManFeedingBaby, name: 'Padre: Daniel Pozos' }
			]
		},
		{
			title: 'Roberto Carrillo',
			icon: NotoV1PersonInTuxedoLightSkinTone,
			open: false,
			avatars: [
				{ icon: NotoWomanFeedingBaby, name: 'Madre: Erika Luevano' },
				{ icon: NotoManFeedingBaby, name: 'Padre: Jorge Carrillo' }
			]
		},
		{
			title: 'Rosalina Tadeo & Roberto Luevano',
			icon: NotoV1WomanAndManHoldingHands,
			name: 'Rosalina Tadeo & Roberto Luevano',
			open: false,
			avatars: [
				{ icon: NotoRing, name: 'Anillo: Carolina Trigo & Manuel Saavedra' },
				{ icon: NotoHeartWithRibbon, name: 'Lazo: Angélica Ojeda & Jorge Delgado' },
				{ icon: NotoCoin, name: 'Arras: Jorge Carrillo', size: '1.25rem' }
			]
		}
	];
</script>

<Section
	title="Detalles"
	subtitle="Información importante del evento"
	color="surface"
	class="details-container"
>
	<div class="tree-view card variant-glass-surface card-hover overflow-hidden glow-effect">
		<TreeView>
			{#each sections as section}
				<TreeViewItem open={section.open}>
					<svelte:fragment slot="lead">
						<div
							class="card flex items-center space-x-4 p-3 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg text-wrap"
						>
							<svelte:component this={section.icon} class="icon" style="font-size: 2rem;" />
							<p class="text-xl">{section.title}</p>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="children">
						{#each section.avatars as avatar}
							<TreeViewItem>
								<svelte:fragment slot="lead">
									<div
										class="card flex items-center space-x-4 p-3 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg text-wrap"
									>
										<svelte:component this={avatar.icon} class="icon" style="font-size: {avatar.size ? avatar.size : '2rem'};" />
										<p class="text-xl">{avatar.name}</p>
									</div>
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
			<NotoDress style="font-size: 3rem" />
			<span class="px-3 text-center"> Código de vestimenta </span>
			<NotoNecktie style="font-size: 3rem" />
		</header>
		<p class="text-xl btn variant-glass-primary card-hover text-wrap">
			Formal (Color Tinto reservado para damas de honor)
		</p>
	</div>
	<div class="location">
		<div class="location-card card variant-glass-surface card-hover overflow-hidden glow-effect">
			<div class="minimap">
				<img src={minimapImageUrl1} alt="Minimap Preview" class="w-full h-auto" />
			</div>
			<footer>
				<a class="btn variant-glass-primary w-full px-4 py-3 text-wrap" href={url1} target="_blank">
					<span class="flex flex-col">
						<span class="text-2xl pb-3 font-bold cursor-pointer">Ceremonia: 11:30AM</span>
						<span class="text-xl font-semibold">{addressDet1}</span>
						<span class="text-xl font-semibold">{address1}</span>
					</span>
					<MaterialSymbolsOpenInNewSharp style="font-size: 2rem;" />
				</a>
			</footer>
		</div>
		<div class="location-card card ghost card-hover overflow-hidden glow-effect">
			<div class="minimap">
				<img src={minimapImageUrl2} alt="Minimap Preview" class="w-full h-auto" />
			</div>
			<footer>
				<a class="btn variant-glass-primary w-full px-4 py-3 text-wrap" href={url2} target="_blank">
					<span class="flex flex-col">
						<span class="text-2xl pb-3 font-bold cursor-pointer">Evento: 02:45PM</span>
						<span class="text-xl font-semibold">{addressDet2}</span>
						<span class="text-xl font-semibold">{address2}</span>
					</span>
					<MaterialSymbolsOpenInNewSharp style="font-size: 2rem;" />
				</a>
			</footer>
		</div>
	</div>
</Section>

<style>
	div.location {
		grid-area: location;
	}

	.dresscode {
		display: grid;
		grid-template-rows: max-content 1fr;
		justify-content: center;
		gap: 1rem;
	}

	.location-card {
		position: relative;
		display: grid;
		grid-template-rows: max-content 1fr;
	}
	.location {
		display: flex;
		flex-direction: column;
		height: max-content;
		gap: 2rem;
	}
	.minimap img {
		border-radius: var(--radius-lg);
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
	@media (min-width: 768px) {
		.location {
			flex-direction: column;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.dresscode {
			grid-area: dresscode;
			width: 100%;
		}
		.tree-view {
			grid-area: treeview;
			width: 100%;
			max-width: 100%;
			height: 100%;
		}
	}
</style>
