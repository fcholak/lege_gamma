"use client";

import { useForm } from "react-hook-form";

export default function CreateDocument() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const formData = new FormData();
    formData.append("name", "Hello Kitty!");
    formData.append("file", data.file[0]);

    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/documents/records",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("file")} />
      <input type="submit" />
    </form>
  );
}
