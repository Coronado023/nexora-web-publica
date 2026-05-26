# Nexora Web Publica

Sitio oficial de Nexora, preparado para publicacion profesional con Next.js, React, TypeScript y Tailwind CSS.

## Tecnologias usadas

- `Next.js`: framework principal para rendimiento, SEO y despliegue directo en Vercel.
- `React`: componentes reutilizables para mantener la interfaz ordenada.
- `TypeScript`: ayuda a detectar errores antes de publicar.
- `Tailwind CSS`: sistema de estilos rapido, responsive y consistente.
- `Lucide React`: iconos limpios para botones, tarjetas y secciones.

## Estructura del proyecto

- `src/app`: rutas principales, metadatos SEO, sitemap, robots y estilos globales.
- `src/components`: bloques visuales reutilizables de la pagina.
- `src/data/site.ts`: textos, servicios, redes y datos editables de Nexora.
- `public/brand`: logo y recursos publicos de identidad.
- `.vscode`: configuracion y tareas listas para trabajar desde VS Code.
- `vercel.json`: configuracion basica para publicar en Vercel.

## Comandos principales

```bash
npm run dev
```

Inicia la web localmente para desarrollo.

```bash
npm run lint
```

Revisa errores de codigo y buenas practicas.

```bash
npm run build
```

Genera la version optimizada de produccion.

```bash
npm run check
```

Ejecuta `lint` y `build`. Usalo antes de hacer commit o publicar.

```bash
npm run audit:prod
```

Revisa vulnerabilidades moderadas o criticas en dependencias.

## Ejecutar localmente

```bash
cd C:\Nexora\01_Programacion\Web_Publica
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Preparacion para GitHub

```bash
git status
git add .
git commit -m "feat: preparar sitio publico de Nexora"
git branch -M main
```

Luego crea un repositorio vacio en GitHub y conecta el remoto:

```bash
git remote add origin https://github.com/TU_USUARIO/nexora-web-publica.git
git push -u origin main
```

## Preparacion para Vercel

1. Entrar a `https://vercel.com`.
2. Conectar tu cuenta de GitHub.
3. Seleccionar el repositorio `nexora-web-publica`.
4. Framework preset: `Next.js`.
5. Build command: `npm run build`.
6. Install command: `npm ci`.
7. Agregar variable de entorno si tienes dominio definitivo:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

8. Presionar `Deploy`.

## Notas de mantenimiento

- Cambia textos, servicios y redes desde `src/data/site.ts`.
- Cambia secciones visuales desde `src/components`.
- Guarda imagenes publicas en `public/brand` o nuevas carpetas dentro de `public`.
- Antes de publicar cambios, ejecuta `npm run check` y `npm run audit:prod`.
