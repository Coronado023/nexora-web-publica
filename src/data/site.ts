import { Bot, Box, Cpu, Sparkles } from "lucide-react";

// Este archivo concentra el contenido editable de la web.
// Cuando quieras cambiar textos, servicios o redes sociales, empieza aqui.

function normalizeUrl(url: string) {
  const cleanUrl = url.trim();

  if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) {
    return cleanUrl;
  }

  return `https://${cleanUrl}`;
}

export const brand = {
  name: "Nexora",
  tagline: "Ideas que toman forma",
  email: "studio.nexora3d@gmail.com",
  siteUrl: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || "nexora3d.vercel.app"),
};

export const services = [
  {
    title: "Impresion 3D",
    text: "Prototipos, piezas funcionales y productos personalizados con acabados precisos.",
    icon: Box,
  },
  {
    title: "Desarrollo digital",
    text: "Webs, sistemas internos y herramientas conectadas para operar con mas velocidad.",
    icon: Cpu,
  },
  {
    title: "Automatizacion",
    text: "Flujos inteligentes para reducir tareas repetitivas y ordenar procesos.",
    icon: Bot,
  },
  {
    title: "Diseno moderno",
    text: "Identidad visual, interfaces limpias y experiencias listas para crecer.",
    icon: Sparkles,
  },
];

export const gallery = [
  "Prototipos",
  "Accesorios",
  "Piezas tecnicas",
  "Productos a medida",
];

export const channels = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexora_gt?igsh=MW4zdGhoa29yN2VpaA==",
  },
  { label: "Correo", href: "mailto:studio.nexora3d@gmail.com" },
];
