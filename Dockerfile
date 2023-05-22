FROM node:18.16.0
WORKDIR /app
COPY . .
ARG REACT_APP_API_URL="http://localhost:8080"
ENV REACT_APP_API_URL=${REACT_APP_API_URL}
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]