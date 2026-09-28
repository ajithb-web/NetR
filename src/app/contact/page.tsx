import React from "react";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us the module, phase and start date. We'll come back with consultants we have already interviewed.",
};

type SearchParams = Promise<{ intent?: string; role?: string }>;

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { intent, role } = await searchParams;

  return (
    <Background>
      <Contact intent={intent} role={role} />
    </Background>
  );
};

export default Page;
