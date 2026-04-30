# ---------- BUILD ----------
FROM node:20-alpine3.19 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---------- RUN ----------
FROM node:20-alpine3.19

WORKDIR /app

# Copy only necessary files
COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]