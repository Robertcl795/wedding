<script lang="ts">
	import Section from '$components/Section.svelte';
	import { Button, Card, Input } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	const phoneNumber = '523310817122'; // Replace with the actual phone number
	const message = encodeURIComponent('Hola! Confirmo mi asistencia para la boda!');

	// Handle form submission
	function handleSubmit(event: any) {
		event.preventDefault();
		// Create the RSVP message
		const message = `Confirmo mi asistencia!\nNombre:`;

		// Encode the message for the WhatsApp URL
		const encodedMessage = encodeURIComponent(message);

		// Redirect to WhatsApp with the pre-filled message
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
		window.location.href = whatsappUrl;
	}
</script>

<Section
	title="Confirma asistencia"
	subtitle="¡Únete a nosotros para nuestro día especial! Confirma tu asistencia antes del 24 de Septiembre para informarnos si puedes celebrar con nosotros. ¡Estamos ansiosos por verte!"
	color="surface"
	class="gifts-container"
>
	<Card img="/photos/P32.jpg" reverse={false} size="lg">
		<form on:submit={handleSubmit} class="flex flex-col items-center">
			<h5 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
				Nos vemos pronto!
			</h5>

			<Button size="xl" type="submit" class="btn btn-primary">
				Confirma tu asistencia<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
			</Button>
		</form>
	</Card>
</Section>
