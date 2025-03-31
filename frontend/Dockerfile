# 1. Usar la imagen de Node.js
FROM node:18-alpine

# 2. Crear un directorio de trabajo
WORKDIR /app

# 3. Copiar archivos del frontend
COPY package.json ./
COPY package-lock.json ./

# 4. Instalar dependencias
RUN npm install
COPY . ./

# 5. Exponer el puerto 5173
EXPOSE 5173

# 6. Iniciar la aplicación
CMD ["npm", "run", "dev", "--", "--host"]