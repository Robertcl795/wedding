<script lang="ts">
	import Section from '$components/Section.svelte';
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline, CheckCircleSolid, EnvelopeOpenSolid, StarSolid } from 'flowbite-svelte-icons';
</script>

<Section
	title="Mesa de Regalos"
	subtitle="Su amor y apoyo son los mayores regalos que podríamos pedir. Si desea honrarnos con un regalo, tenemos las siguientes sugerencias:"
	color="surface"
	class="gifts-container"
>
	<Card img="/photos/P22.jpg" reverse={false} size="md">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LIVERPOOL</h5>
		<p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-300 leading-tight">
			Número de evento: 51516538
		</p>
		<Button href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51516538" target="_blank">
			Ir a mesa de regalos <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
		</Button>
	</Card>
	<Card img="/photos/P30.jpg" reverse={false} size="md">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			LLUVIA DE SOBRES
		</h5>
		<p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-300 leading-tight">
			Lluvia de sobres es la tradición de regalar dinero a los novios el día del evento, en un
			sobre.
		</p>
		<div class="flex">
            <EnvelopeOpenSolid color="white" class="fade-in-out w-8 h-8" />
            <StarSolid color="white" class="fade-in-out w-8 h-8"/>
            <EnvelopeOpenSolid color="white" class="fade-in-out w-8 h-8" />
            <StarSolid color="white" class="fade-in-out w-8 h-8"/>
            <EnvelopeOpenSolid color="white" class="fade-in-out w-8 h-8" />
            <StarSolid color="white" class="fade-in-out w-8 h-8"/>
            <EnvelopeOpenSolid color="white" class="fade-in-out w-8 h-8" />
            <StarSolid color="white" class="fade-in-out w-8 h-8"/>
            <EnvelopeOpenSolid color="white" class="fade-in-out w-8 h-8" />
        </div>
	</Card>
	<Card img="/photos/P13.jpg" reverse={false} size="md">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			LUNA DE MIEL
		</h5>
		<p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-300 leading-tight">
			O si lo deseas, puedes agregar kilómetros y experiencias a nuestra luna de miel. Puedes
			hacerlo a la siguiente cuenta:
		</p>
		<ul>
			<li class="flex space-x-2 rtl:space-x-reverse">
				<CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-500" />
				<p class="text-xl font-normal leading-tight text-gray-500 dark:text-gray-200">
					<span class="font-bold">Banco: </span>Santander
                </p>
			</li>
            <li class="flex space-x-2 rtl:space-x-reverse">
				<CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-500" />
				<p class="text-xl font-normal leading-tight text-gray-500 dark:text-gray-200">
					<span class="font-bold">Tarjeta: </span>5579 0700 8731 6975
                </p>
			</li>
		</ul>
	</Card>
	<div class="card envelopes"></div>
	<div class="card honeymoon"></div>
</Section>
