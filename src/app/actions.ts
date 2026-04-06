"use server";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // In a real production app, you would integrate with Resend, SendGrid, etc.
  // For now, we simulate the delay and log the success.
  console.log("Starting Server Action: sendContactEmail");
  console.log({ name, email, subject, message });

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { 
    success: true, 
    message: "Thank you for reaching out! Your message has been sent successfully." 
  };
}
