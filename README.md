# Proyecto Web: multidestinos

Creado con el framework Astro 

```sh
npm create astro@latest -- --template basics
```

## 🚀 Estructura

Dentro del proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── globals/ (de estructura)
│   │   └── Wip.astro
│   │   └── Más componentes...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── destinos.astro
│       └── propietarios.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial en `src/components/`, pero es donde nos gusta poner cualquier componente Astro/React/Vue/Svelte/Preact. Actualmente se trabaja solo con componentes de Astro.

Cualquier activo estático, como imágenes, puede colocarse en el directorio `public/`.

## 🧞 Commandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde un terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 ¿Quieres saber más?

No dude en consultar la [documentación de Astro](https://docs.astro.build).
