"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";
import { updateUser } from "@/lib/actions/users";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateNameCard({ name }: { name: string }) {
  const [state, formAction] = useFormState(updateUser, {
    error: "",
  });

  useEffect(() => {
    if (state.success == true) toast.success("Usuário atualizado");
    if (state.error) toast.error("Error", { description: state.error });
  }, [state]);

  return (
    <AccountCard
      params={{
        header: "Seu nome",
        description:
          "Digite seu nome completo ou um nome de exibição com o qual você se sinta confortável.",
      }}
    >
      <form action={formAction}>
        <AccountCardBody>
          <Input defaultValue={name ?? ""} name="name" />
        </AccountCardBody>
        <AccountCardFooter description="Máximo de 64 caracteres">
          <Submit />
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}

const Submit = () => {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>Atualizar nome</Button>;
};
