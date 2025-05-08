"use server";

import { type } from "arktype";

export type FormState =
  | {
      errors?: {
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const signInFormSchema = type({
  password: "8<=string<=8",
});

export const signIn = async (formState: FormState, formData: FormData) => {
  const password = formData.get("password");
  console.log(password);
  return formState;
};
