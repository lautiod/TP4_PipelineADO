# Decisiones del TP
  
- **1.** Stack elegido y estructura del repo.
  
- **2.** Diseño del pipeline (stages, jobs, artefactos).
  
- **3.** Evidencias (capturas).

## 1) Stack elegido y estructura del repo

Para el trabajo se eligió un stack JavaScript/Node con aplicación mínima:

- **Frontend:** React + Vite.

-> Scripts: npm ci, npm test (Vitest), npm run build.

- **Backend:** Node.js + Express.

-> Scripts: npm ci, npm test (node:test), npm run build.

**Estructura:** El proyecto esta estructurado en dos unicos directorios donde en uno se aloja el frontend y en la otra el backend

<img width="430" height="197" alt="image" src="https://github.com/user-attachments/assets/8f325dfc-0a0c-4d68-91e6-5162f39a9f8f" />

## 2) Diseño del pipeline

**Stage CI (Integración Continua):** se ejecuta automáticamente en cada push a main.

Dentro del stage se definieron dos jobs independientes:

- **1. Frontend job:**

  - Pasos: checkout → npm ci → npm test → npm run build.

  - Artefacto publicado: frontend_dist (contenido de /dist).

- **2. Backend job:**

  - Pasos: checkout → npm ci → levantar server temporal → npm test → npm run build.

  - Artefacto publicado: backend_build (contenido de /build).

**Características clave:**

-> Agente Self-Hosted: el pipeline corre en el pool TP4_PipelineADO, con un agente instalado en la PC local.

-> Artefactos: se generan dos paquetes separados (front y back), que validan el build independiente pero forman parte de la misma ejecución CI.

-> Tests automáticos: se ejecutan en ambos jobs antes del build para asegurar calidad.

  
