<script lang="ts">
	import Section from '$components/Section.svelte';
	import { Button, Card } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	const phoneNumber = '523112048975'; // Replace with the actual phone number
	const message = encodeURIComponent('Hola! Confirmo mi asistencia para la boda!');
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
</script>

<Section
	title="Confirma asistencia"
	subtitle="¡Únanse a nosotros para nuestro día especial! Confirmen su asistencia antes del 20 de Septiembre para informarnos si puede celebrar con nosotros. ¡Estamos ansiosos por verlos allí!"
	color="surface"
	class="gifts-container"
>
	<Card img="/photos/P28.jpg" reverse={false} size="md">
		<div class="flex flex-col items-center">
			<h5 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
				Nos vemos pronto!
			</h5>
			<Button class="" size="xl" href={whatsappLink} target="_blank" rel="noopener noreferrer">
				Confirma tu asistencia<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
			</Button>
		</div>
	</Card>
</Section>
