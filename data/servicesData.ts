import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    title: "Control de Inventario y Almacén",
    description:
      "Monitoreo en tiempo real para evitar quiebres de stock y descuadres físicos.",
    features: [
      "Multialmacén y control de entradas / salidas",
      "Soporte para lectores de código de barras",
      "Alertas tempranas de stock mínimo",
    ],
    icon: "Boxes",
  },
  {
    title: "Facturación y Cotizadores Web",
    description:
      "Emisión ágil de proformas comerciales para acelerar el ciclo de ventas B2B.",
    features: [
      "Generación de proformas en PDF en segundos",
      "Listas de precios por tipo de cliente",
      "Seguimiento de cotizaciones pendientes",
    ],
    icon: "ReceiptText",
  },
  {
    title: "Plataformas Web a Medida",
    description:
      "Sistemas únicos desarrollados según los procesos internos de tu negocio.",
    features: [
      "Diseño 100% responsivo para PC y celular",
      "Paneles de administración intuitivos",
      "Despliegues en la nube de alta disponibilidad",
    ],
    icon: "LayoutDashboard",
  },
  {
    title: "Automatización de Procesos",
    description:
      "Elimina tareas manuales repetitivas en Excel para reducir errores operativos.",
    features: [
      "Conexión con WhatsApp y correos automáticos",
      "Reportes de rendimiento en un clic",
      "Trazabilidad de pedidos y comprobantes",
    ],
    icon: "Cpu",
  },
];
