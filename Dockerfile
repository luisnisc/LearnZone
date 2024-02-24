# Establecer la imagen base
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias
RUN npm install
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @mui/icons-material
# Copiar el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto que tu aplicación utiliza
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev", "--host"]