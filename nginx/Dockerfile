FROM node:20-buster as builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.3-alpine
EXPOSE 80
COPY --from=builder /app/out /usr/share/nginx/html