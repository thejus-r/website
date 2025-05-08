"use client";

import Button from "@/components/ui/Button";
import { DisplaySmall, Label } from "@/components/ui/Typography";
import Link from "next/link";

const LostPage = () => {
  return (
    <section className="flex h-full flex-col gap-8 w-full items-center justify-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <DisplaySmall>On no!</DisplaySmall>
        <Label intent={"tertiary"} weight={"light"}>
          Seems like you are lost.
        </Label>
      </div>
      <Link href={"/"}>
        <Button>Go back Home</Button>
      </Link>
    </section>
  );
};

export default LostPage;
