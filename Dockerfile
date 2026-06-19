# 1. Cambiamos a la versión 22 que sí soporta tu versión de Vite
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 2. Compilar el proyecto para producción
RUN npm run build

# 3. Instalar el servidor estático global
RUN npm install -g serve

EXPOSE 5173

# 4. Servir la carpeta compilada
CMD ["serve", "-s", "dist", "-l", "5173"]