"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ContactForm = () => {
  const [email, setEmail] = useState("");

  const onClick = () => {};

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl text-ellipsis text-light-shadow">
        지금 구독하고 자산 관리 인사이트를 얻어보세요
      </h1>
      <div className="border rounded-sm overflow-hidden border-[#292929] w-max flex justify-between items-center focus-within:border-[#F2F2F2]">
        <Input
          placeholder="your-email@example.com"
          className="border-none bg-transparent pl-3 mr-5 min-w-[250px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="white" className="border-none rounded-none">
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
};
