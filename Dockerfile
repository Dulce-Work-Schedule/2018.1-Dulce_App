FROM node:8.11.2

WORKDIR /app/
ADD ./package.json /app/package.json

RUN npm install

CMD ["bash"]
