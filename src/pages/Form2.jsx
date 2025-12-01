import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z
    .string("please enter only string")
    .min(3, "min is 3")
    .max(20, "max is 20"),
  email: z
    .email()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "please enter valid email"
    ),
  password: z
    .string()
    .min(8, "please min 8 char")
    .max(16, "please max 16 char")
    .regex(/[a-z]/, "please enter atleast one small letter")
    .regex(/[A-Z]/, "please enter atleast one cap letter")
    .regex(/[0-9]/, "please enter atleast a number")
    .regex(/[+=)(*&^%$#@!{}[?"')]/, "please enter atleast one spacial  char")

    ,
});
export default function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="enter your name"
        />
        {errors?.name?.message && <p>{errors?.name?.message}</p>}
        <input
          type="email"
          {...register("email")}
          placeholder="enter your email"
        />
        {errors?.email?.message && <p>{errors?.email?.message}</p>}
        <input
          type="password"
          {...register("password")}
          placeholder="enter your password"
        />
        {errors?.password?.message && <p>{errors?.password?.message}</p>}
        <button type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}
