import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionBackground } from "./SectionBackground";
import { WaveDivider } from "./WaveDivider";
import { CaseStudyModal } from "./CaseStudyModal";
import { useState } from "react";

interface CaseStudiesProps {
  theme: "dark" | "light";
  language: "en" | "es";
}

export function CaseStudies({ theme, language }: CaseStudiesProps) {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const content = {
    en: {
      title: "Case Studies",
      subtitle: "A selection of projects showcasing my approach to solving complex design challenges with measurable business impact.",
      viewCaseStudy: "View Case Study",
      caseStudies: [
        {
          title: "Real-Time Quote Web App",
          company: "FBI BUILDINGS",
          description: "Designed an end-to-end platform for real-time building cost estimation, streamlining the quoting process for construction companies and improving accuracy.",
          fullDescription: "I led the UX design for a web-based platform that helps construction companies generate accurate, real-time quotes for building projects. The platform integrates live data from suppliers, material costs, and labor rates to provide instant cost estimates.",
          challenge: "Construction companies were struggling with outdated, manual quoting processes that took days to complete and often resulted in inaccurate estimates. Sales teams needed a faster, more reliable way to provide quotes to potential clients while maintaining accuracy and professionalism.",
          solution: "I designed a streamlined workflow that guides users through the quoting process step-by-step. The interface prioritizes clarity and speed, with real-time data integration, intelligent cost calculations, and automated document generation. I worked closely with developers and stakeholders to ensure the solution met both user needs and business requirements.",
          results: [
            "Reduced quote generation time from 3-5 days to under 30 minutes",
            "Improved quote accuracy by 40% through real-time data integration",
            "Increased sales team productivity by 65%",
            "95% user satisfaction score from internal testing",
            "Decreased quote revision requests by 50%",
          ],
          metrics: [
            { label: "Time Saved", value: "95%" },
            { label: "Quote Accuracy", value: "+40%" },
            { label: "User Satisfaction", value: "95%" },
          ],
          tags: ["Web App", "SaaS", "Construction Tech"],
          color: "bg-emerald-500",
          processImages: [
            "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjI4MTE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1625447520777-fea6c59cd65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYyODQyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1635397990741-81cb230b154b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg3ODU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODYzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1635397990741-81cb230b154b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg3ODU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjI4MTE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "Syngenta GHX Mobile App",
          company: "SYNGENTA",
          description: "Designed a comprehensive e-commerce mobile application for agricultural products, enabling farmers to browse, purchase, and track orders with an intuitive, mobile-first experience.",
          fullDescription: "I led the end-to-end UX/UI design for Syngenta's mobile e-commerce platform, which revolutionizes how farmers purchase agricultural products. The app provides a seamless shopping experience tailored specifically for the agricultural industry, with features for product discovery, order management, and customer support.",
          challenge: "Farmers needed a reliable, easy-to-use mobile platform to purchase agricultural products, but existing solutions were complex, slow, and not optimized for mobile use in field conditions. The challenge was to create an intuitive interface that works in various connectivity scenarios while handling complex product catalogs and order workflows.",
          solution: "I designed a streamlined mobile experience with clear product categorization, visual product cards, simplified checkout flow, and offline capabilities. The interface uses large, touch-friendly elements suitable for outdoor use, with smart search and filtering to help farmers quickly find the products they need. I implemented a step-by-step ordering process with clear confirmation and tracking features.",
          results: [
            "Increased mobile conversion rate by 58% in first 6 months",
            "Reduced order completion time from 15 minutes to under 4 minutes",
            "Achieved 4.7/5 star rating on app stores with over 50k downloads",
            "92% user satisfaction score from farmer feedback surveys",
            "Decreased support tickets related to ordering by 45%",
          ],
          metrics: [
            { label: "Mobile Sales", value: "+58%" },
            { label: "Order Time", value: "-73%" },
            { label: "App Rating", value: "4.7/5" },
          ],
          tags: ["Mobile App", "E-Commerce", "AgTech"],
          color: "bg-blue-500",
          processImages: [
            "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4ODMzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjI4OTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwZmllbGQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjg5NzIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBlY29tbWVyY2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODk3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjI4OTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4ODMzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "Simplified the accreditation process for healthcare institutions",
          company: "THE JOINT COMMISSION",
          description: "Designed an intuitive web-based accreditation management platform that helps healthcare institutions seamlessly complete their accreditation processes with clear documentation and real-time progress tracking.",
          fullDescription: "I designed an intuitive web-based accreditation management platform that helps healthcare institutions seamlessly complete their accreditation processes. The platform guides users through complex requirements, tracks progress in real-time, and provides clear documentation management.",
          challenge: "The accreditation process for healthcare institutions is notoriously complex and time-consuming. My research revealed that users struggled with understanding what documentation is required, tracking progress across multiple requirements, collaborating with team members, and meeting strict deadlines. The main challenge was simplifying a highly complex process without losing essential functionality while handling sophisticated backend requirements and compliance standards.",
          solution: "I designed a clean, step-by-step interface that breaks down the accreditation process into manageable sections. The dashboard provides at-a-glance progress tracking, with clear indicators for completed, in-progress, and pending tasks. Smart notifications keep teams aligned and prevent missed deadlines. The system includes an interactive dashboard, task management, document upload capabilities, progress tracking, team collaboration features, and a comprehensive compliance checklist.",
          results: [
            "Reduced accreditation completion time by 45%",
            "Decreased documentation errors by 60%",
            "Improved team collaboration scores by 75%",
            "Achieved 95% user satisfaction rating",
            "Processed 500+ successful accreditations",
          ],
          metrics: [
            { label: "Completion Time", value: "-45%" },
            { label: "Documentation Errors", value: "-60%" },
            { label: "User Satisfaction", value: "95%" },
          ],
          tags: ["Web Platform", "Healthcare", "Compliance"],
          color: "bg-indigo-500",
          processImages: [
            "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGFkbWluaXN0cmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tcGxpYW5jZSUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjI4OTc1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462814-485c3672e447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMHN5c3RlbXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjgwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGFkbWluaXN0cmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462814-485c3672e447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMHN5c3RlbXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "Financial Planning App",
          company: "WealthWise",
          description: "Created a comprehensive financial planning platform that simplifies budgeting, investing, and retirement planning for young professionals.",
          metrics: [
            { label: "User Engagement", value: "+89%" },
            { label: "Daily Active Users", value: "+120%" },
            { label: "NPS Score", value: "72" },
          ],
          tags: ["Mobile App", "FinTech", "Data Visualization"],
          color: "bg-purple-500",
        },
      ],
    },
    es: {
      title: "Casos de Estudio",
      subtitle: "Una selección de proyectos que muestran mi enfoque para resolver desafíos de diseño complejos con impacto medible en el negocio.",
      viewCaseStudy: "Ver Caso de Estudio",
      caseStudies: [
        {
          title: "App Web de Cotizaciones en Tiempo Real",
          company: "FBI BUILDINGS",
          description: "Diseñé una plataforma end-to-end para estimación de costos de construcción en tiempo real, optimizando el proceso de cotización para empresas constructoras y mejorando la precisión.",
          fullDescription: "Lideré el diseño UX de una plataforma web que ayuda a empresas de construcción a generar cotizaciones precisas en tiempo real para proyectos de edificación. La plataforma integra datos en vivo de proveedores, costos de materiales y tarifas de mano de obra para proporcionar estimaciones de costos instantáneas.",
          challenge: "Las empresas de construcción luchaban con procesos de cotización manuales y obsoletos que tomaban días en completarse y a menudo resultaban en estimaciones inexactas. Los equipos de ventas necesitaban una forma más rápida y confiable de proporcionar cotizaciones a clientes potenciales manteniendo precisión y profesionalismo.",
          solution: "Diseñé un flujo de trabajo optimizado que guía a los usuarios paso a paso por el proceso de cotización. La interfaz prioriza claridad y velocidad, con integración de datos en tiempo real, cálculos inteligentes de costos y generación automatizada de documentos. Trabajé estrechamente con desarrolladores y stakeholders para asegurar que la solución cumpliera tanto las necesidades del usuario como los requerimientos del negocio.",
          results: [
            "Reducción del tiempo de generación de cotizaciones de 3-5 días a menos de 30 minutos",
            "Mejora de precisión de cotizaciones en 40% mediante integración de datos en tiempo real",
            "Aumento de productividad del equipo de ventas en 65%",
            "95% de satisfacción de usuarios en pruebas internas",
            "Disminución de solicitudes de revisión de cotizaciones en 50%",
          ],
          metrics: [
            { label: "Tiempo Ahorrado", value: "95%" },
            { label: "Precisión", value: "+40%" },
            { label: "Satisfacción", value: "95%" },
          ],
          tags: ["App Web", "SaaS", "Construcción"],
          color: "bg-emerald-500",
          processImages: [
            "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjI4MTE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1625447520777-fea6c59cd65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYyODQyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1635397990741-81cb230b154b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg3ODU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODYzOTY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1635397990741-81cb230b154b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2Mjg3ODU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwbGFubmluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NjI4MTE0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "App Móvil Syngenta GHX",
          company: "SYNGENTA",
          description: "Diseñé una aplicación móvil de comercio electrónico completa para productos agrícolas, permitiendo a los agricultores navegar, comprar y rastrear pedidos con una experiencia intuitiva y centrada en el móvil.",
          fullDescription: "Lideré el diseño UX/UI completo para la plataforma de comercio electrónico móvil de Syngenta, que revoluciona la forma en que los agricultores compran productos agrícolas. La aplicación proporciona una experiencia de compra sin interrupciones adaptada específicamente para la industria agrícola, con funciones para descubrimiento de productos, gestión de pedidos y soporte al cliente.",
          challenge: "Los agricultores necesitaban una plataforma móvil confiable y fácil de usar para comprar productos agrícolas, pero las soluciones existentes eran complejas, lentas y no optimizadas para el uso móvil en condiciones de campo. El desafío era crear una interfaz intuitiva que funcione en diversos escenarios de conectividad mientras maneja catálogos de productos complejos y flujos de trabajo de pedidos.",
          solution: "Diseñé una experiencia móvil optimizada con categorización clara de productos, tarjetas visuales de productos, flujo de pago simplificado y capacidades sin conexión. La interfaz utiliza elementos grandes y fáciles de tocar adecuados para uso al aire libre, con búsqueda y filtrado inteligentes para ayudar a los agricultores a encontrar rápidamente los productos que necesitan. Implementé un proceso de pedidos paso a paso con confirmaciones claras y características de seguimiento.",
          results: [
            "Aumento de la tasa de conversión móvil en 58% en los primeros 6 meses",
            "Reducción del tiempo de finalización de pedidos de 15 minutos a menos de 4 minutos",
            "Logró una calificación de 4.7/5 estrellas en las tiendas de aplicaciones con más de 50k descargas",
            "Puntuación de satisfacción del usuario del 92% en encuestas de retroalimentación de agricultores",
            "Disminución de los tickets de soporte relacionados con los pedidos en 45%",
          ],
          metrics: [
            { label: "Ventas Móviles", value: "+58%" },
            { label: "Tiempo de Pedido", value: "-73%" },
            { label: "Calificación de la App", value: "4.7/5" },
          ],
          tags: ["App Móvil", "E-Commerce", "AgTech"],
          color: "bg-blue-500",
          processImages: [
            "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4ODMzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjI4OTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwZmllbGQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjg5NzIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBlY29tbWVyY2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODk3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NjI4OTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4ODMzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "Plataforma de Acreditación HealthTech",
          company: "THE JOINT COMMISSION",
          description: "Diseñé una plataforma de gestión de acreditación intuitiva basada en web que ayuda a las instituciones de salud a completar sus procesos de acreditación de manera fluida con documentación clara y seguimiento de progreso en tiempo real.",
          fullDescription: "Diseñé una plataforma de gestión de acreditación intuitiva basada en web que ayuda a las instituciones de salud a completar sus procesos de acreditación de manera fluida. La plataforma guía a los usuarios a través de requisitos complejos, rastrea el progreso en tiempo real y proporciona gestión de documentación clara.",
          challenge: "El proceso de acreditación para las instituciones de salud es notoriamente complejo y demorado. Mi investigación reveló que los usuarios luchaban para entender qué documentación se requiere, rastrear el progreso a través de múltiples requisitos, colaborar con miembros del equipo y cumplir con plazos estrictos. El desafío principal era simplificar un proceso altamente complejo sin perder la funcionalidad esencial mientras se manejan requisitos de backend sofisticados y estándares de cumplimiento.",
          solution: "Diseñé una interfaz limpia y paso a paso que desglosa el proceso de acreditación en secciones manejables. El tablero proporciona un seguimiento de progreso a primera vista, con indicadores claros para tareas completadas, en progreso y pendientes. Las notificaciones inteligentes mantienen a los equipos alineados y previenen plazos perdidos. El sistema incluye un tablero interactivo, gestión de tareas, capacidades de carga de documentos, seguimiento de progreso, características de colaboración de equipo y una lista de verificación de cumplimiento completa.",
          results: [
            "Redució el tiempo de finalización de la acreditación en 45%",
            "Disminuyó los errores de documentación en 60%",
            "Mejoró las puntuaciones de colaboración del equipo en 75%",
            "Logró una calificación de satisfacción del usuario del 95%",
            "Procesó más de 500 acreditaciones exitosas",
          ],
          metrics: [
            { label: "Tiempo de Finalización", value: "-45%" },
            { label: "Errores de Documentación", value: "-60%" },
            { label: "Satisfacción del Usuario", value: "95%" },
          ],
          tags: ["Plataforma Web", "Salud", "Cumplimiento"],
          color: "bg-indigo-500",
          processImages: [
            "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGFkbWluaXN0cmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tcGxpYW5jZSUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjI4OTc1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462814-485c3672e447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMHN5c3RlbXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
          finalImages: [
            "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjgwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGFkbWluaXN0cmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758691462814-485c3672e447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMHN5c3RlbXxlbnwxfHx8fDE3NjI4OTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          ],
        },
        {
          title: "App de Planificación Financiera",
          company: "WealthWise",
          description: "Creé una plataforma integral de planificación financiera que simplifica presupuestos, inversiones y planificación de retiro para jóvenes profesionales.",
          metrics: [
            { label: "Engagement", value: "+89%" },
            { label: "Usuarios Diarios", value: "+120%" },
            { label: "NPS Score", value: "72" },
          ],
          tags: ["App Móvil", "FinTech", "Visualización"],
          color: "bg-purple-500",
        },
      ],
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden" id="work">
      {/* Wave Divider at bottom */}
      <WaveDivider theme={theme} position="bottom" variant="gradient" />
      
      {/* Animated Background */}
      <SectionBackground theme={theme} variant="alternate" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4">{t.title}</h2>
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} max-w-3xl text-lg transition-colors duration-500`}>
            {t.subtitle}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className={`group border ${
                theme === "dark" ? "border-white/10 hover:border-white/20 bg-gradient-to-br from-white/5 to-transparent" : "border-black/10 hover:border-black/20 bg-gradient-to-br from-black/5 to-transparent"
              } rounded-2xl p-8 transition-all duration-500 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`w-12 h-1 ${study.color} rounded-full mb-4 transition-all duration-300 group-hover:w-20`} />
                <h3 className="mb-2">{study.title}</h3>
                <p className={`${
                  theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                } cursor-pointer inline-flex items-center gap-1 transition-colors duration-300`}>
                  {study.company}
                  <ArrowUpRight className="w-4 h-4" />
                </p>
              </div>

              {/* Description */}
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-6 leading-relaxed transition-colors duration-500`}>
                {study.description}
              </p>

              {/* Metrics */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                {study.metrics.map((metric, idx) => (
                  <motion.div 
                    key={idx} 
                    className={`text-center p-4 ${
                      theme === "dark" ? "bg-white/5" : "bg-black/5"
                    } rounded-xl transition-colors duration-500`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`${theme === "dark" ? "text-green-400" : "text-green-600"} mb-1 transition-colors duration-500`}>{metric.value}</div>
                    <div className={`text-xs ${
                      theme === "dark" ? "text-gray-500" : "text-gray-600"
                    } uppercase tracking-wide transition-colors duration-500`}>
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full ${
                      theme === "dark" ? "bg-white/5 text-gray-400" : "bg-black/5 text-gray-600"
                    } text-xs uppercase tracking-wider transition-colors duration-500`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Case Study Button */}
              <button 
                onClick={() => setSelectedStudy(index)}
                className={`mt-6 w-full py-3 rounded-xl ${
                  theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
                } transition-all duration-300 flex items-center justify-center gap-2 text-sm group-hover:scale-[1.02]`}
              >
                {t.viewCaseStudy}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA for Code/No-Code Portfolio */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={`p-12 rounded-3xl backdrop-blur-xl border ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent border-blue-500/20"
              : "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent border-blue-500/30"
          } transition-all duration-500`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <span className="text-2xl">⚡</span>
                <span className={`text-sm uppercase tracking-wider ${theme === "dark" ? "text-blue-300" : "text-blue-700"}`}>
                  {language === "en" ? "AI-Powered Projects" : "Proyectos con IA"}
                </span>
              </div>
              
              <h3 className="mb-4">
                {language === "en" 
                  ? "Code / No-Code Portfolio" 
                  : "Portfolio Code / No-Code"}
              </h3>
              
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-8 max-w-2xl mx-auto text-lg`}>
                {language === "en"
                  ? "Explore my rapid prototyping projects built with AI-powered tools like Figma Make, v0, Lovable, and Claude."
                  : "Explora mis proyectos de prototipado rápido construidos con herramientas de IA como Figma Make, v0, Lovable y Claude."}
              </p>
              
              <a
                href="/code-nocode-portfolio"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                } text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25`}
              >
                {language === "en" ? "View AI Projects" : "Ver Proyectos con IA"}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedStudy !== null && (
        <CaseStudyModal
          isOpen={selectedStudy !== null}
          onClose={() => setSelectedStudy(null)}
          theme={theme}
          language={language}
          study={t.caseStudies[selectedStudy]}
        />
      )}
    </section>
  );
}