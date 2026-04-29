# Guía de Despliegue y Desarrollo Local

## Tabla de Contenido

1. Lanzar servidor local
2. Despliegue en GitHub Pages (versión HTML)
3. Despliegue con Next.js (versión avanzada)
4. Solución de problemas

---

## 1. Lanzar Servidor Local

### Opción A — Servidor rápido con Python (sin instalar nada)

Abre una terminal (CMD, PowerShell o Terminal) en la carpeta del proyecto y ejecuta:

```bash
# Windows (PowerShell)
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"
python -m http.server 8765

# macOS / Linux
cd ~/Documents/Web\ Abeja\ Del\ Panal\ 8A
python3 -m http.server 8765
```

Luego abre tu navegador en: **http://localhost:8765**

Para detener el servidor: presiona `Ctrl + C` en la terminal.

### Opción B — Con Node.js (si ya lo tienes instalado)

```bash
# Instala un servidor estático global (solo la primera vez)
npm install -g serve

# Ejecuta
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"
serve -p 8765
```

Abre: **http://localhost:8765**

### Opción C — Con Live Server en VS Code

1. Abre la carpeta del proyecto en VS Code
2. Instala la extensión "Live Server" de Ritwick Dey
3. Haz clic derecho en `index.html` > "Open with Live Server"
4. Se abrirá automáticamente en tu navegador con recarga en vivo

### Opción D — Servidor de desarrollo Next.js (versión completa)

```bash
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"

# Instalar dependencias (solo la primera vez)
npm install

# Lanzar servidor de desarrollo
npm run dev
```

Abre: **http://localhost:3000**

Este modo ofrece recarga en caliente (HMR), mejor para desarrollo activo.

---

## 2. Despliegue en GitHub Pages (versión HTML)

El archivo `index.html` en la raíz del proyecto es una SPA (Single Page Application) autocontenida que funciona directamente en GitHub Pages sin necesidad de build.

### Paso 1 — Crear cuenta de GitHub (si no tienes)

Ve a https://github.com/join y crea tu cuenta.

### Paso 2 — Instalar Git (si no lo tienes)

Descarga Git desde https://git-scm.com/downloads e instálalo.

Luego configura tu identidad:

```bash
git config --global user.name "Steven"
git config --global user.email "sp930718@gmail.com"
```

### Paso 3 — Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `abejita-del-panal-8a`
3. Descripción: `Sitio web La Abejita del Panal 8A — Productos apícolas 100% naturales de Boyacá`
4. Selecciona **Public**
5. NO marques "Add a README file" (ya tenemos uno)
6. Haz clic en **Create repository**

### Paso 4 — Subir el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta estos comandos:

```bash
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"

# Inicializar git (solo la primera vez)
git init -b main

# Agregar todos los archivos
git add -A

# Hacer el primer commit
git commit -m "feat: sitio web La Abejita del Panal 8A"

# Conectar con GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/abejita-del-panal-8a.git

# Subir
git push -u origin main
```

Si te pide credenciales, usa tu usuario de GitHub y un Personal Access Token
(genéralo en: https://github.com/settings/tokens > "Generate new token (classic)" > marca "repo").

### Paso 5 — Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (pestaña superior)
3. En el menú lateral izquierdo, haz clic en **Pages**
4. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **Save**
6. Espera 1-2 minutos

Tu sitio estará disponible en:
**https://TU_USUARIO.github.io/abejita-del-panal-8a/**

### Paso 6 — Actualizar el sitio

Cuando hagas cambios, ejecuta:

```bash
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"
git add -A
git commit -m "descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## 3. Despliegue con Next.js (versión avanzada)

Si prefieres usar la versión Next.js para más funcionalidades:

### Opción A — Vercel (recomendado para Next.js)

1. Ve a https://vercel.com y crea una cuenta con GitHub
2. Haz clic en "New Project"
3. Importa tu repositorio `abejita-del-panal-8a`
4. Vercel detectará Next.js automáticamente
5. Haz clic en "Deploy"
6. Tu sitio estará en: `https://abejita-del-panal-8a.vercel.app`

### Opción B — Build estático para GitHub Pages

```bash
cd "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"
npm install
npm run build
```

Esto genera una carpeta `out/` con archivos HTML estáticos.
Luego puedes subir el contenido de `out/` a GitHub Pages.

---

## 4. Solución de Problemas

### "python no se reconoce como comando"
- Windows: Instala Python desde https://python.org. Marca "Add to PATH" durante la instalación.
- Prueba con `python3` en vez de `python`.

### "npm no se reconoce como comando"
- Instala Node.js desde https://nodejs.org (versión LTS).

### "git no se reconoce como comando"
- Instala Git desde https://git-scm.com/downloads.

### La página se ve en blanco
- Verifica que estés en la carpeta correcta del proyecto.
- Asegúrate de que el archivo `index.html` existe en la raíz.
- Si usas file:// (abrir directo), algunos navegadores bloquean scripts locales. Usa un servidor.

### Los estilos no cargan
- Todos los estilos están incrustados en el `index.html`, no hay archivos externos que cargar.
- Limpia la caché del navegador: `Ctrl + Shift + R`.

### Error de CORS al abrir con file://
- No abras el archivo directamente con doble clic. Usa siempre un servidor local (ver Sección 1).

### GitHub Pages muestra 404
- Verifica que el archivo se llame exactamente `index.html` (minúsculas).
- Verifica que GitHub Pages esté configurado en Settings > Pages > Branch: main, Folder: / (root).
- Espera 2-3 minutos después de hacer push; GitHub Pages tarda en actualizar.

---

## Resumen de URLs

| Entorno | URL |
|---------|-----|
| Local (Python) | http://localhost:8765 |
| Local (Node serve) | http://localhost:8765 |
| Local (Next.js dev) | http://localhost:3000 |
| GitHub Pages | https://TU_USUARIO.github.io/abejita-del-panal-8a/ |
| Vercel | https://abejita-del-panal-8a.vercel.app |
