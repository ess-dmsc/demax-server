FROM node:11.14.0-alpine
LABEL maintainer="jeremias.hillerberg@esss.se"

 # make sure root login is disabled
RUN sed -i -e 's/^root::/root:!:/' /etc/shadow

ENV http_proxy "http://192.168.1.1:8123"
ENV https_proxy $http_proxy
ENV no_proxy "localhost, 127.0.0.1"

RUN npm config set proxy  $http_proxy
RUN npm config set https-proxy  $http_proxy
RUN npm config set registry http://registry.npmjs.org/
RUN npm config set strict-ssl false
RUN apk --update add openjdk7-jre

RUN npm install pm2 -g

COPY package.json /usr/src/app/package.json

WORKDIR /usr/src/app

RUN npm install

COPY . /usr/src/app

ENV http_proxy "http://172.18.12.30:8123"
ENV https_proxy $http_proxy
ENV no_proxy "localhost, 127.0.0.1"

EXPOSE 3000

CMD ["sh", "./CI/scripts/pm2.sh"]