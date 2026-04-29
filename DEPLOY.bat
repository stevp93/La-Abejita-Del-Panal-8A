@echo off
echo ============================================
echo  DESPLIEGUE - La Abejita del Panal 8A
echo  GitHub Pages
echo ============================================
echo.

cd /d "C:\Users\STEVEN\Documents\Web Abeja Del Panal 8A"

echo [1/6] Limpiando git anterior...
if exist ".git" (
    rmdir /s /q .git
)

echo [2/6] Inicializando repositorio...
git init -b main
git config user.name "Steven"
git config user.email "sp930718@gmail.com"

echo [3/6] Creando .gitignore...
(
echo node_modules/
echo .next/
echo out/
echo *.log
echo .DS_Store
echo Thumbs.db
echo *.pdf
) > .gitignore

echo [4/6] Agregando archivos...
git add -A

echo [5/6] Haciendo commit...
git commit -m "feat: sitio web La Abejita del Panal 8A - imagenes reales, WhatsApp, SP Automatizaciones"

echo [6/6] Subiendo a GitHub...
git remote add origin https://github.com/stevp93/La-Abejita-Del-Panal-8A.git
git push -u origin main --force

echo.
echo ============================================
echo  LISTO! Ahora ve a GitHub para activar Pages:
echo.
echo  1. Abre: https://github.com/stevp93/La-Abejita-Del-Panal-8A/settings/pages
echo  2. En "Source" selecciona: Deploy from a branch
echo  3. Branch: main / Folder: / (root)
echo  4. Clic en "Save"
echo  5. Espera 2-3 minutos
echo  6. Tu sitio estara en:
echo     https://stevp93.github.io/La-Abejita-Del-Panal-8A/
echo ============================================
echo.
pause
