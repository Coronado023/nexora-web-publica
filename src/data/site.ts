import { Bot, Box, Cpu, Sparkles } from "lucide-react";

// Este archivo concentra el contenido editable de la web.
// Cuando quieras cambiar textos, servicios o redes sociales, empieza aqui.

export const brand = {
  name: "Nexora",
  tagline: "Ideas que toman forma",
  email: "contacto@nexora.gt",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nexora.gt",
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

// Reemplaza estos enlaces cuando Nexora tenga redes oficiales definitivas.
export const channels = [
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];
