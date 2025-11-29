import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
const schema = z.object({
  name: z
    .string("please enter only strings")
    .min(3, "minimum 3 char")
    .max(20, "max 20 char"),
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide valid email"
    ),
  password: z
    .string()
    .min(8, "8 char")
    .max(16, "max 16 char")
    .regex(/[a-z]/, "atleast one small letter")
    .regex(/[A-Z]/, "atleast one capital letter")
    .regex(/[0-9]/, "atleast one number ")
    .regex(/[_%+-]/, "atleast one spacial charactor "),
  phone: z
    .string()

    .min(10, "please enter 10 digits")
    .max(10, "please enter max 10 digits")
    .regex(/[0-9]{10}/, "please enter valid phone number "),
});
export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000);
    });

    console.log(errors);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter your name ..."
        />
        {errors?.name?.message && (
          <p className="text-red-500">{errors?.name?.message}</p>
        )}
        {/* not required now   value onchange name validations  */}
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your name ..."
        />
        {errors?.email?.message && (
          <p className="text-red-500">{errors?.email?.message}</p>
        )}

        <input
          type="password"
          {...register("password")}
          placeholder="Enter your name ..."
        />
        {errors?.password?.message && (
          <p className="text-red-500">{errors?.password?.message}</p>
        )}
        <input
          type="text"
          {...register("phone")}
          placeholder="Enter your name ..."
        />
        {errors?.phone?.message && (
          <p className="text-red-500">{errors?.phone?.message}</p>
        )}
        <button type="submit">
          {isSubmitting ? "form Submitting..." : "Submit"}{" "}
        </button>
      </form>
    </div>
  );
}


