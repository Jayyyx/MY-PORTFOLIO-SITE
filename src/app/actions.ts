'use server';

import { z } from 'zod';
import { hireMeFormSchema } from '@/lib/schemas';

export async function handleHireMe(data: z.infer<typeof hireMeFormSchema>) {
  const result = hireMeFormSchema.safeParse(data);

  if (result.success) {
    console.log("Hiring request:", result.data);
    // In a real app, you'd send an email or save to a database here.
    return { success: true, message: "Your message has been sent successfully!" };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
