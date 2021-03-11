FROM node:lts-alpine as build-stage
WORKDIR /app
RUN npm ci
COPY . .
RUN npm run build


# Second stage, copy the artifacts in a new stage and 
# build the image
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /app/dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]