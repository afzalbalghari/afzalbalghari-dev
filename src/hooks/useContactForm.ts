"use client";
import { useState } from "react";
interface FormState { name: string; email: string; message: string; }
type Status = "idle" | "loading" | "success" | "error";
export function useContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  }
  return { form, status, handleChange, handleSubmit };
}
