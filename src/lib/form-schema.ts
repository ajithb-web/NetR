import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}

/** Client enquiry: "Tell us what you need". */
export const formSchema = z.object({
  name: z.string().min(1, "Tell us who to reply to."),
  email: z
    .string()
    .min(1, "Enter your work email so we can reply.")
    .email("Enter your work email so we can reply."),
  company: z.string().optional(),
  roles: z.string().optional(),
  message: z
    .string()
    .min(20, "Add a few project details so we can match the right people."),
  agree: z.literal(true, { message: "Please agree to the privacy policy." }),
});

/** Consultant application: "Send my resume". */
export const applySchema = z.object({
  name: z.string().min(1, "Tell us who to reply to."),
  email: z
    .string()
    .min(1, "Enter your email so we can reply.")
    .email("Enter your email so we can reply."),
  phone: z.string().optional(),
  applyingFor: z.string().min(1, "Tell us which role you're applying for."),
  resume: z.string().min(1, "Attach your resume."),
  message: z
    .string()
    .min(20, "Tell us a little about the work you do best.")
    .optional()
    .or(z.literal("")),
  agree: z.literal(true, { message: "Please agree to the privacy policy." }),
});
