# 🦷 Dental Sonríe Lima — Sitio Web Completo

Landing comercial para consultorio dental construida con **Next.js 15 + Sanity CMS**.
Diseñada para captar pacientes por WhatsApp, 100% editable sin tocar código.

---

## 📁 Estructura del Proyecto

```
dental-sonrie-lima/
├── sanity/
│   └── schemas/              # Schemas de Sanity CMS
│       ├── index.ts          # Exporta todos los schemas
│       ├── siteSettings.ts   # Configuración global
│       └── schemas.ts        # Hero, servicios, FAQs, etc.
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal (home)
│   │   ├── layout.tsx        # Layout raíz con metadata
│   │   ├── globals.css       # Estilos globales + fuentes
│   │   ├── servicios/[slug]/ # Detalle de servicio
│   │   ├── studio/[[...tool]]/ # Sanity Studio embebido
│   │   └── api/revalidate/   # Endpoint para webhook
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PromotionBanner.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Sections.tsx      # Doctors, Gallery, Testimonials, FAQ
│   │   ├── ScheduleLocationSection.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloatingButton.tsx
│   ├── lib/
│   │   ├── sanity.ts         # Cliente Sanity + urlFor
│   │   ├── queries.ts        # Queries GROQ
│   │   └── whatsapp.ts       # Helper para links de WhatsApp
│   └── types/
│       └── index.ts          # Tipos TypeScript
├── sanity.config.ts          # Configuración de Sanity Studio
├── next.config.ts
├── tailwind.config.ts
├── .env.example
└── README.md
```

---

## 🚀 Instalación Local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Crear archivo de variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus datos reales (ver sección **Sanity** abajo).

### 3. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.
Abre [http://localhost:3000/studio](http://localhost:3000/studio) para el CMS.

---

## 🎨 Sanity CMS — Configuración Paso a Paso

### Paso 1: Crear proyecto en Sanity

1. Ve a [sanity.io](https://www.sanity.io) y crea una cuenta gratuita.
2. Haz clic en **"Create new project"**.
3. Nombre del proyecto: `Dental Sonríe Lima`
4. Dataset: `production`
5. Copia el **Project ID** que aparece en el dashboard.

### Paso 2: Completar `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-24
SANITY_REVALIDATE_SECRET=dental_sonrie_revalidate_2026_pon_una_clave_larga_aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Paso 3: Agregar CORS Origins en Sanity

1. Ve a [sanity.io/manage](https://www.sanity.io/manage)
2. Selecciona tu proyecto
3. Ve a **API → CORS Origins**
4. Agrega las siguientes URLs:
   - `http://localhost:3000` (desarrollo)
   - `https://tu-dominio.vercel.app` (producción, cuando la tengas)
5. Marca la casilla **"Allow credentials"** en ambas.

### Paso 4: Acceder al Studio

Con `npm run dev` activo, ve a:
```
http://localhost:3000/studio
```

Inicia sesión con tu cuenta de Sanity y comienza a agregar contenido.

---

## 📝 Contenido de Prueba para Sanity

Carga este contenido inicial para ver el sitio funcionando:

### ⚙️ Configuración del Sitio (siteSettings)
```
businessName: Dental Sonríe Lima
whatsappNumber: 51987654321
whatsappDefaultMessage: Hola, quisiera agendar una consulta dental. ¿Tienen disponibilidad?
address: Av. Principal 123, Miraflores, Lima
phone: 01-234-5678
email: contacto@dentalsonrielima.com
seoTitle: Dental Sonríe Lima | Consultorio Dental en Miraflores
seoDescription: Atención dental personalizada para toda la familia en Miraflores, Lima.
```

### 🦸 Hero
```
eyebrow: Consultorio Dental en Miraflores, Lima
title: Tu Sonrisa, Nuestra Prioridad
subtitle: Atención dental personalizada para toda la familia. Agenda tu evaluación hoy.
primaryButtonText: Agendar Cita por WhatsApp
primaryButtonMessage: Hola, quisiera agendar una cita. ¿Tienen disponibilidad?
secondaryButtonText: Ver Servicios
secondaryButtonUrl: #servicios
active: true
```

### 🦷 Servicios (crear uno por uno)

| Nombre | Precio Ref. | Mostrar Precio | Duración | Nota de precio |
|--------|------------|----------------|----------|----------------|
| Evaluación Odontológica | 50 | ✅ | 30 min | |
| Limpieza Dental | 120 | ✅ | 45 min | |
| Blanqueamiento Dental | 350 | ✅ | 60-90 min | |
| Curación Dental | 100 | ✅ | 30-45 min | desde |
| Extracción Dental | 180 | ✅ | 45 min | desde |
| Ortodoncia | | ❌ | | evaluación previa |
| Diseño de Sonrisa | | ❌ | | consultar |
| Emergencia Dental | | ✅ | | desde 80 |

Para cada servicio, agrega mensaje WhatsApp personalizado, ej:
```
Hola, me gustaría información sobre la Evaluación Odontológica. ¿Cuándo tienen disponibilidad?
```

### 🕐 Horarios (crear uno por uno)

| Día | Apertura | Cierre | Cerrado |
|-----|----------|--------|---------|
| Lunes – Viernes | 9:00 a.m. | 7:00 p.m. | ❌ |
| Sábado | 9:00 a.m. | 2:00 p.m. | ❌ |
| Domingo | | | ✅ |

### ✅ Elementos de Confianza
```
1. Ambiente Seguro e Higienizado | Shield
2. Atención Personalizada | Heart
3. Reserva por WhatsApp | CheckCircle
4. Ubicación Accesible | MapPin
```

### ❓ FAQs de ejemplo
```
P: ¿Necesito cita previa?
R: Recomendamos agendar cita para garantizar tu atención. Puedes hacerlo fácilmente por WhatsApp.

P: ¿Los precios incluyen materiales?
R: Los precios referenciales incluyen el procedimiento base. En la evaluación te daremos el presupuesto exacto.

P: ¿Atienden emergencias dentales?
R: Sí, contamos con atención para urgencias dentales. Escríbenos por WhatsApp y te orientamos.

P: ¿Tienen facilidades de pago?
R: Consultanos directamente por WhatsApp para conocer las opciones disponibles.
```

---

## ☁️ Despliegue en Vercel

### Paso 1: Subir a GitHub

```bash
git init
git add .
git commit -m "feat: sitio dental sonríe lima"
git remote add origin https://github.com/tu-usuario/dental-sonrie-lima.git
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión.
2. Haz clic en **"Add New → Project"**.
3. Importa tu repositorio de GitHub.
4. En **Environment Variables**, agrega:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = tu_project_id
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2026-04-24
SANITY_REVALIDATE_SECRET = tu_secret_largo_aqui
NEXT_PUBLIC_SITE_URL = https://tu-dominio.vercel.app
```

5. Haz clic en **Deploy**.

### Paso 3: Actualizar CORS en Sanity

Después del deploy, agrega tu URL de Vercel en:
**sanity.io/manage → tu proyecto → API → CORS Origins**

```
https://tu-dominio.vercel.app
```

---

## 🔔 Webhook de Sanity (Revalidación Automática)

Para que los cambios en Sanity se reflejen en el sitio sin redeploy:

### Paso 1: Ir a Sanity → API → Webhooks

En [sanity.io/manage](https://www.sanity.io/manage):
1. Ve a tu proyecto → **API → Webhooks**
2. Haz clic en **"Create webhook"**

### Paso 2: Configurar el webhook

```
Name: Revalidar Next.js
URL: https://tu-dominio.vercel.app/api/revalidate?secret=TU_SECRET_AQUI
Trigger on: Create, Update, Delete
Filter: (vacío, para revalidar todo)
HTTP method: POST
HTTP Headers: Content-Type: application/json
```

> ⚠️ Reemplaza `TU_SECRET_AQUI` con el mismo valor de `SANITY_REVALIDATE_SECRET` en Vercel.

### Paso 3: Probar el webhook

1. Edita cualquier contenido en Sanity Studio.
2. Haz clic en **Publish**.
3. Espera ~2 segundos y recarga el sitio.
4. Los cambios deben aparecer sin necesidad de redeploy. ✅

---

## 🔧 Personalización Rápida

### Cambiar colores
Edita `tailwind.config.ts` → sección `colors.primary` y `colors.dental`.

### Cambiar fuentes
Edita `src/app/globals.css` → importa otras fuentes de Google Fonts.

### Agregar nueva sección
1. Crea schema en `sanity/schemas/`
2. Agrega query en `src/lib/queries.ts`
3. Crea componente en `src/components/`
4. Agrega al `src/app/page.tsx`

---

## 📦 Comandos Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

---

## ✅ Checklist de Lanzamiento

- [ ] Contenido cargado en Sanity (servicios, horarios, hero, etc.)
- [ ] Número de WhatsApp real configurado
- [ ] Logo subido a Sanity
- [ ] Imágenes de servicios subidas
- [ ] CORS origins actualizados en Sanity
- [ ] Variables de entorno configuradas en Vercel
- [ ] Webhook configurado y probado
- [ ] SEO title y description configurados en siteSettings
- [ ] Google Maps embed URL agregado
- [ ] Dominio personalizado configurado en Vercel (opcional)

---

## 🤝 Reutilizar como Plantilla

Para usar este proyecto con otro cliente:

1. Duplica el repositorio.
2. Crea un nuevo proyecto en Sanity.
3. Actualiza las variables de entorno.
4. Cambia el nombre del negocio, colores y contenido.
5. ¡Listo! En menos de 1 hora tienes un sitio nuevo funcionando.
