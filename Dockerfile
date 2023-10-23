FROM node:alpine

WORKDIR /App

COPY . ./

#COPY .babelrc ./

COPY tsconfig.json ./

#COPY prisma ./

COPY package*.json ./

RUN npm install -g npm@latest
#RUN npm i --force
#RUN npm install bcrypt @types/bcrypt --force



    
RUN apk update && \
    apk upgrade && \
    apk add tzdata


ENV TZ 'America/Guayaquil' 

RUN cd /usr/share/zoneinfo && \ 
    cp -f /usr/share/zoneinfo/$TZ /etc/localtime && \ 
    echo $TZ > /etc/timezone

COPY . .

#RUN npm run build

RUN ls -la

CMD ["npm", "run", "dev"]