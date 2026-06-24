// server/api/contact.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// 1. THE HONEYPOT TRAPDOOR
	// If a bot (or your local test) filled this out, we intercept it here.
	// We return a fake 200 success so the bot stops trying,
	// and we exit early before Resend is ever invoked.
	if (body.faxNumber) {
		return {
			success: true,
			message: "Form processed successfully (intercepted).",
		};
	}

	// 2. Basic validation safety check for required items
	const { firstName, lastName, email, city, state } = body;
	if (!firstName || !lastName || !email || !city || !state) {
		throw createError({
			statusCode: 400,
			statusMessage: "Missing required validation fields.",
		});
	}

	try {
		// 3. Dispatch the email cleanly
		await resend.emails.send({
			from: "James Frazier <hello@webdevjames.com>",
			to: "hello@webdevjames.com",
			subject: `webdevjames Lead from ${firstName} ${lastName}`,
			html: `
        <h2>New Contact Form Entry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${body.company || "N/A"}</p>
        <p><strong>Role:</strong> ${body.role || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
        <p><strong>Location:</strong> ${city}, ${state}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${body.message || "No message provided."}</p>
      `,
		});

		return { success: true, message: "Email dispatched successfully." };
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to dispatch notification email via SMTP transporter.",
		});
	}
});
