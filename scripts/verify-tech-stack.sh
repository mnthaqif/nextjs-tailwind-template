#!/bin/bash

# 📋 Tech Stack Verification Script
# This script verifies that all technologies mentioned in TECH_STACK.md are properly configured

echo "🔍 Verifying Next.js Tailwind Template Tech Stack..."
echo "=================================================="

# Function to check if command exists
check_command() {
    if command -v $1 &> /dev/null; then
        echo "✅ $1 is installed: $(command -v $1)"
    else
        echo "❌ $1 is NOT installed"
        return 1
    fi
}

# Function to check package.json dependency
check_dependency() {
    if grep -q "\"$1\"" package.json; then
        local version=$(grep "\"$1\"" package.json | cut -d'"' -f4)
        echo "✅ $1: $version"
    else
        echo "❌ $1: NOT found in package.json"
        return 1
    fi
}

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1 exists"
    else
        echo "❌ $1 does NOT exist"
        return 1
    fi
}

echo
echo "📋 Checking Prerequisites..."
echo "----------------------------"
check_command node
check_command npm
check_command pnpm

echo
echo "📦 Checking Core Dependencies..."
echo "--------------------------------"
check_dependency "next"
check_dependency "react"
check_dependency "react-dom"
check_dependency "typescript"

echo
echo "🎨 Checking Styling Dependencies..."
echo "----------------------------------"
check_dependency "tailwindcss"
check_dependency "postcss"
check_dependency "autoprefixer"
check_dependency "framer-motion"
check_dependency "lucide-react"

echo
echo "📝 Checking Form Dependencies..."
echo "-------------------------------"
check_dependency "react-hook-form"
check_dependency "@hookform/resolvers"
check_dependency "zod"

echo
echo "🛠️ Checking Dev Tools..."
echo "------------------------"
check_dependency "eslint"
check_dependency "prettier"
check_dependency "husky"
check_dependency "lint-staged"

echo
echo "⚙️ Checking Configuration Files..."
echo "----------------------------------"
check_file "package.json"
check_file "tsconfig.json"
check_file "next.config.mjs"
check_file "tailwind.config.ts"
check_file "postcss.config.mjs"
check_file ".eslintrc.cjs"
check_file ".prettierrc"
check_file "site.config.ts"
check_file "TECH_STACK.md"

echo
echo "📚 Documentation Files..."
echo "------------------------"
check_file "README.md"
check_file "TECH_STACK.md"

echo
echo "🚀 Testing Scripts..."
echo "--------------------"
if pnpm run --help 2>/dev/null | grep -q "available" || grep -q '"dev"' package.json; then
    echo "✅ dev script is available"
else
    echo "❌ dev script is NOT available"
fi

if grep -q '"build"' package.json; then
    echo "✅ build script is available"
else
    echo "❌ build script is NOT available"
fi

if grep -q '"lint"' package.json; then
    echo "✅ lint script is available"
else
    echo "❌ lint script is NOT available"
fi

if grep -q '"type-check"' package.json; then
    echo "✅ type-check script is available"
else
    echo "❌ type-check script is NOT available"
fi

if grep -q '"format"' package.json; then
    echo "✅ format script is available"
else
    echo "❌ format script is NOT available"
fi

echo
echo "=================================================="
echo "✨ Tech Stack Verification Complete!"
echo "📖 See TECH_STACK.md for detailed information"
echo "=================================================="