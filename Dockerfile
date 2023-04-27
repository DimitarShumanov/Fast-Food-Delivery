FROM node:16.19.1-alpine as base
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

FROM base AS builder-backend
WORKDIR /home/node/app
RUN apk add --no-cache --virtual .build-deps git make g++
COPY --chown=node:node ./backend/package.json ./package.json
COPY --chown=node:node ./backend ./
RUN npm install --loglevel warn
RUN npm run build

FROM base AS builder-frontend
WORKDIR /home/node/app
COPY --chown=node:node ./frontend/package.json ./package.json
COPY --chown=node:node ./frontend/package-lock.json ./package-lock.json
COPY --chown=node:node ./frontend ./
RUN npm install --loglevel warn
RUN npm run build

FROM base AS production
WORKDIR /home/node/app

# Copy client-side build
COPY --chown=node:node --from=builder-frontend /home/node/app/dist/frontend/ /home/node/app/dist/public/

# Copy server-side runtime npm modules
COPY --chown=node:node --from=builder-backend /home/node/app/node_modules /home/node/app/node_modules

#Copy server-side dist folder
COPY --chown=node:node --from=builder-backend /home/node/app/built/ /home/node/app/dist/

# Copy everything else we need to run(server package).
COPY --chown=node:node ./backend/package.json /home/node/app/package.json

USER node
ENV NODE_ENV prod
EXPOSE 5000
CMD ["npm", "start"]