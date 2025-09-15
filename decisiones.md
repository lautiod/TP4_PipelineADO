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

## 3. Evidencias

### Creación del Agent Pool

<img width="709" height="460" alt="image" src="https://github.com/user-attachments/assets/5c93acaf-5f35-4903-880c-cd311311f2eb" />

### Configuración del Agente Self-Hosted

<img width="711" height="382" alt="image" src="https://github.com/user-attachments/assets/32ca0107-da69-4ef6-9b94-dc9475c8f4b9" />

<img width="958" height="84" alt="image" src="https://github.com/user-attachments/assets/1ed1560e-5646-4e4b-8c30-cd9b837571e8" />

### Creación del pipeline asociando nuestro repositorio en GitHub

<img width="961" height="482" alt="image" src="https://github.com/user-attachments/assets/a2b04523-bee8-47e8-a549-72b25f2059ee" />

### Ejecución del pipeline

<img width="354" height="806" alt="image" src="https://github.com/user-attachments/assets/6ac23dcd-efeb-4ec7-9bc2-01e4f52d21c9" />

### Artefactos publicados

<img width="271" height="239" alt="image" src="https://github.com/user-attachments/assets/eddad360-7a48-442c-beab-1b84af82adea" />


  
