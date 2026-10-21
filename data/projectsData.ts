import { ProjectDemo } from "@/types";

export const projectsData: ProjectDemo[] = [
  {
    id: "jypos-ferreteria",
    title: "JYPoS - B2B Ferretería & Lubricentro",
    category: "Punto de Venta (POS) & Facturación",
    description:
      "Plataforma multi-tenant para ferreterías y lubricentros con arqueo ciego de caja, ventas de mostrador de alta velocidad, control de stock fraccionado y gestión de créditos.",
    badges: [
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Upstash Redis",
      "Kysely",
      "Tailwind CSS",
    ],
    demoUrl: "https://b2b-ferreteria-demo.vercel.app",
    suggestedCredentials: {
      user: "admin@donlucho.pe (o en demo con 1 clic)",
      pass: "password123",
    },
    whatsappText:
      "Hola JY Soluciones Tech, me interesa implementar un sistema POS y control de inventarios como JYPoS en mi negocio.",
  },
  {
    id: "vortexyolti",
    title: "VortexYolTI - Taller & Autopartes",
    category: "Gestión Comercial & Almacén",
    description:
      "Control de stock multialmacén para repuestos, emisión rápida de proformas y seguimiento de órdenes.",
    badges: ["Angular", "Nest.js", "PostgreSQL", "Cloud Run"],
    demoUrl: "https://vortexyolti-demo.vercel.app/",
    suggestedCredentials: {
      user: "demo@jysoluciones.tech",
      pass: "Demo2026!",
    },
    whatsappText:
      "Hola JY Soluciones Tech, deseo consultar por un sistema como VortexYolTI para mi negocio.",
  },
  {
    id: "techstore",
    title: "TechStore - Dashboard & E-commerce",
    category: "Retail & Tienda Digital",
    description:
      "Catálogo web responsivo, carrito de compras integrado y panel de control administrativo de ventas.",
    badges: ["ASP.NET Core", "React", "SQL Server", "Tailwind CSS"],
    demoUrl: "https://tech-store-ecommerce-phi.vercel.app/",
    suggestedCredentials: {
      user: "admin",
      pass: "Password123!",
    },
    whatsappText:
      "Hola JY Soluciones Tech, me interesa una tienda virtual y panel similar a TechStore.",
  },
];
