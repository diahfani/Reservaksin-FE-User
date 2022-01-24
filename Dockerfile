FROM node:14.15.5-alpine as build
RUN mkdir /app
ADD . /app
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
# CMD ["npm", "start"]

# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --frozen-lockfile --silent
# RUN npm install -g --silent
# COPY . ./
# RUN npm run build

# #production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html

# #setting nginx
# COPY nginx/nginx.conf /etx/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
