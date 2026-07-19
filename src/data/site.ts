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
    text: "Fabricacion de piezas decorativas, funcionales y personalizadas mediante tecnologia de impresion 3D.",
    icon: Box,
  },
  {
    title: "Productos de catalogo",
    text: "Seleccion de productos listos para fabricar, elegidos por su utilidad, diseno y calidad visual.",
    icon: Cpu,
  },
  {
    title: "Personalizacion",
    text: "Adaptamos productos y proyectos para ajustarlos a necesidades especificas cuando sea posible.",
    icon: Bot,
  },
  {
    title: "Desarrollo continuo",
    text: "Nexora evoluciona constantemente incorporando nuevas ideas, productos y procesos de fabricacion.",
    icon: Sparkles,
  },
];

export const gallery = [
  "Productos decorativos",
  "Piezas funcionales",
  "Organizacion y escritorio",
  "Productos personalizados",
];

export const channels = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexora_gt?igsh=MW4zdGhoa29yN2VpaA==",
  },
  { label: "Correo", href: "mailto:studio.nexora3d@gmail.com" },
];
