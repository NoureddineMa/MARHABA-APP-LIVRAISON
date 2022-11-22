FROM node:16-alpine

WORKDIR /backend

COPY package.json .

RUN npm install 


COPY . .

EXPOSE 7000

CMD ["node","server.js"]


ENV PORT=7000

ENV DB_CONNECT=mongodb://mongodb:27017/marhaba

ENV JWT_SECRET=kjfgqskfgqsfqsfjbsqk

ENV PWD_EMAIL=gkjyzqqtrcspbttn

ENV EMAIL=noureddinemaher13@gmail.com

ENV SMTP=gmail

