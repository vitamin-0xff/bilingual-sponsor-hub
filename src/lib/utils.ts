import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function composeMailto(subject_: string, body_: string ,email: string, tire: string): string {
  const subject = encodeURIComponent(subject_.replace("{{tire}}", tire));
  const body = encodeURIComponent(body_.replace("{{tire}}", tire));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}