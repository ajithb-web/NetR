"use client";
import { useRef, useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Paperclip } from "lucide-react";
import { motion } from "motion/react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { applyAction } from "@/actions/server-action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { applySchema } from "@/lib/form-schema";

type Schema = z.infer<typeof applySchema>;

const ROLES = [
  "Java Developer",
  "Python Developer",
  "DevOps Engineer",
  "Business Analyst",
  "Workday consultant",
  "PeopleSoft consultant",
  "Lawson consultant",
  "UKG (Kronos) consultant",
  "Something else",
];

export function ApplyForm({ defaultRole }: { defaultRole?: string }) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const form = useForm<Schema>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      applyingFor: defaultRole ?? "",
      resume: "",
      message: "",
      agree: false,
    } as unknown as Schema,
  });

  const formAction = useAction(applyAction, {
    onSuccess: () => form.reset(),
  });
  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    formAction.execute(data);
  });

  const { isExecuting, hasSucceeded } = formAction;
  if (hasSucceeded) {
    return (
      <div className="w-full gap-2 rounded-md border p-2 sm:p-5 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
          className="h-full px-3 py-6"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            className="mx-auto mb-4 flex w-fit justify-center rounded-full border p-2"
          >
            <Check className="size-8" />
          </motion.div>
          <h2 className="mb-2 text-center text-2xl font-bold text-pretty">
            Thanks
          </h2>
          <p className="text-muted-foreground text-center text-lg text-pretty">
            We&apos;ll match you to roles that fit and reply within [X] days.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-2 space-y-4 rounded-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Full name * </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="First and last name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email * </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="you@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Phone </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Best number to reach you"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applyingFor"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Applying for * </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  list="apply-roles"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="e.g. Java Developer"
                />
              </FormControl>
              <datalist id="apply-roles">
                {ROLES.map((role) => (
                  <option key={role} value={role} />
                ))}
              </datalist>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Resume * </FormLabel>
              <FormControl>
                <div>
                  <input
                    ref={fileInput}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(e) => {
                      const name = e.target.files?.[0]?.name ?? "";
                      setFileName(name);
                      field.onChange(name);
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-start font-normal"
                    onClick={() => fileInput.current?.click()}
                  >
                    <Paperclip className="size-4" />
                    {fileName || "Attach a PDF or Word file"}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anything else </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Modules you know best, availability, work authorization"
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-y-0 space-x-1">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  required
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4"
                  >
                    privacy policy
                  </Link>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-end pt-3">
          <Button className="rounded-lg" size="sm">
            {isExecuting ? "Sending..." : "Send my resume"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
