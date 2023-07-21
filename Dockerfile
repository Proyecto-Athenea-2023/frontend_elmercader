MAINTAINER Carlos Sierra carlos.sierra.at@usa.edu.co

FROM --platform=$BUILDPLATFORM node:lts AS development

WORKDIR /workspace
COPY package.json /workspace/package.json
COPY package-lock.json /workspace/package-lock.json

RUN npm ci
COPY . /workspace

ENV CI=true
ENV PORT=3000

CMD ["npm", "start"]

FROM development AS dev-envs
RUN <<EOF
apt-get update
apt-get install git -y
EOF

FROM development AS build
RUN ["npm", "run", "build"]

FROM nginx:1.13-alpine
COPY --from=build /workspace/build /usr/share/nginx/html