"use server";
import { actionClient } from "./safe-action";

import { applySchema, formSchema } from "@/lib/form-schema";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    // TODO: route to the hiring inbox / ATS
    // eslint-disable-next-line no-console
    console.log("enquiry", parsedInput);
    return {
      success: true,
      message: "Form submitted successfully",
    };
  });

export const applyAction = actionClient
  .inputSchema(applySchema)
  .action(async ({ parsedInput }) => {
    // TODO: store the resume file and route to the careers inbox. The form
    // currently sends the file name only — file storage is not wired up yet.
    // eslint-disable-next-line no-console
    console.log("application", parsedInput);
    return {
      success: true,
      message: "Application submitted successfully",
    };
  });
