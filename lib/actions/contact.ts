"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  cellPhone: z.string().min(1, "Phone number is required"),
});

export type ContactFormState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    companyName?: string[];
    email?: string[];
    cellPhone?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    cellPhone: formData.get("cellPhone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fill in a valid value for all required fields",
      success: false,
    };
  }

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Here you would normally send the data to your backend or email service
  // For now, we'll just return success
  try {
    // TODO: Add your API call here
    // await sendContactEmail(validatedFields.data);

    return {
      message: "Thank you! Redirecting to pricing page...",
      success: true,
    };
  } catch (error) {
    return {
      message: "Something went wrong. Please try again.",
      success: false,
    };
  }
}

