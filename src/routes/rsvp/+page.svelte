<script lang="ts">
	import Section from '$components/Section.svelte';
	import { Button, Card, Input } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	export let data: any;

	const phoneNumber = '523310817122'; // Replace with the actual phone number
	const message = encodeURIComponent('Hola! Confirmo mi asistencia para la boda!');
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

	const inviteeNames: any[] = Array.from({ length: data.seats }).fill('');
	$: isFormValid = inviteeNames.every((name) => name.trim().length > 0);
	// Handle form submission
	function handleSubmit(event: any) {
		event.preventDefault();
		// Create the RSVP message
		const inviteesList = inviteeNames.map((name, index) => `${index + 1}. ${name.trim()}`).join('\n');
		const message = `Confirmo asistencia:\n ${inviteesList}`;

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
			{#each inviteeNames as _, index}
				<div class="mb-4 w-full">
					<label for="invitee-{index}" class="block text-sm font-medium text-gray-200">
						Invitado {index + 1}
					</label>
					<Input
						id="invitee-{index}"
						type="text"
						bind:value={inviteeNames[index]}
						class="mt-1 block w-full"
						placeholder="Invitado {index + 1}"
						required
					/>
				</div>
			{/each}
			<Button size="xl" type="submit" class="btn btn-primary" disabled={!isFormValid}>
				Confirma tu asistencia<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
			</Button>
		</form>
	</Card>
</Section>
