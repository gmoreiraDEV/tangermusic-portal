"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { AccountCard, AccountCardFooter, AccountCardBody } from "./AccountCard";
import { updateUser } from "@/lib/actions/users";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateEmailCard({ email }: { email: string }) {
  const [state, formAction] = useFormState(updateUser, {
    error: "",
  });

  useEffect(() => {
    if (state.success == true) toast.success("Updated Email");
    if (state.error) toast.error("Error", { description: state.error });
  }, [state]);

  return (
    <AccountCard
      params={{
        header: "Seu email",
        description:
          "Por favor, insira o endereço de e-mail que deseja usar com sua conta.",
      }}
    >
      <form action={formAction}>
        <AccountCardBody>
          <Input defaultValue={email ?? ""} name="email" />
        </AccountCardBody>
        <AccountCardFooter description="Enviaremos um e-mail para você para verificar a alteração.">
          <Submit />
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}

const Submit = () => {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>Atualizar email</Button>;
};
