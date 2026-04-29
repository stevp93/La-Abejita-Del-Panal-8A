#!/bin/bash
# ============================================
# Script para subir el proyecto a GitHub
# La Abejita del Panal 8A
# ============================================

echo "📦 Subiendo proyecto a GitHub..."
echo ""

# 1. Verificar que git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Instálalo primero."
    exit 1
fi

# 2. Verificar que gh CLI está instalado (opcional)
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI detectado. Creando repositorio..."
    gh repo create abejita-del-panal-8a --public --description "Sitio web La Abejita del Panal 8A — Productos apícolas 100% naturales de San Mateo, Boyacá" --source=. --remote=origin --push
    echo ""
    echo "✅ ¡Proyecto subido exitosamente!"
else
    echo "ℹ️  GitHub CLI no detectado. Sigue estos pasos manuales:"
    echo ""
    echo "1. Ve a https://github.com/new"
    echo "2. Nombre del repo: abejita-del-panal-8a"
    echo "3. Descripción: Sitio web La Abejita del Panal 8A — Productos apícolas 100% naturales"
    echo "4. Selecciona 'Public' y haz clic en 'Create repository'"
    echo "5. Luego ejecuta estos comandos:"
    echo ""
    echo "   git remote add origin https://github.com/TU_USUARIO/abejita-del-panal-8a.git"
    echo "   git push -u origin main"
    echo ""
fi
