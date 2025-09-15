# Contenido

Cómo ejecutar local, cómo corre el pipeline, prerequisitos del agente, puertos, URLs .

## TP4 – Azure DevOps Pipelines

Aplicación mínima con frontend (React + Vite) y backend (Node.js) para practicar CI en Azure DevOps con agente Self-Hosted.

## 1) Ejecución local

### **Requisitos previos:**

- Node.js 18+ instalado en la máquina.

### **1. Backend**

Ejecutar los siguientes comandos:

> cd backend

> npm install

> npm run dev

__Levanta en http://localhost:3001__

__Puerto: 3001__

### **2. Frontend**

Ejecutar los siguientes comandos:

> cd frontend

> npm install

> npm run dev

__Levanta en http://localhost:5173__

__Puerto: 5173__

## 2) Pipeline

El pipeline está definido en azure-pipelines.yml.

### **Flujo del pipeline (CI)**

**1.** Se ejecuta automáticamente en cada push a la rama main.

**2.** Usa el pool TP4_PipelineADO con un agente Self-Hosted.

**3.** Corre dos jobs independientes:

  - Frontend job 

  - Backend job 

**4.** Al finalizar, quedan publicados los artefactos en la pestaña Artifacts de la ejecución.

## 3) Requisitos del Agente Self-Hosted

- Sistema operativo: Windows 10/11.

- Herramientas instaladas en el agente:

  - Node.js 18+.

- El agente está configurado como servicio en el pool TP4_PipelineADO.



