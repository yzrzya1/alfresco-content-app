FROM node:10.4-alpine AS builder
WORKDIR /usr/src/alfresco
RUN apk add --update git && \
  rm -rf /tmp/* /var/cache/apk/* && \
  git clone https://github.com/Alfresco/alfresco-content-app && \
  cd alfresco-content-app && \
  npm install && \
  npm run build

FROM nginx:stable-alpine
LABEL version="1.4"
LABEL maintainer="Denys Vuika <denys.vuika@alfresco.com>"

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/alfresco/alfresco-content-app/dist/app/ .

ENTRYPOINT [ "/docker-entrypoint.sh" ]
