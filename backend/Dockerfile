# 1. Usar la imagen oficial de Node.js en su version 16
FROM node:16

# 2. Crear un directorio de trabajo
WORKDIR /app

# 3. Copiar archivos del backend
COPY package.json ./
COPY server.js ./

# 4. Instalar dependencias
RUN npm install

# 5. Exponer el puerto 3010
EXPOSE 3010

# 6. Iniciar la aplicacion
CMD ["node", "server.js"]