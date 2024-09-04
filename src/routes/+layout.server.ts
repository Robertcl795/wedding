// src/routes/+page.server.js
import { redirect } from '@sveltejs/kit';

export const load = async ({ url, cookies }) => {
    const numberParam = url.searchParams.get('seats');
    if (numberParam) {
        // Set the cookie with the number from the URL parameter
        cookies.set('seats', numberParam, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        // Redirect to remove the parameter from the URL
        throw redirect(303, '/');
    }

    // Load and return the cookie value
    const cookieVal = cookies.get('seats');
    const seats = cookieVal ? parseInt(cookieVal, 10) : 2;
    return {
        seats
    };
};