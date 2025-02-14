
# Dockerfile for React app
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
