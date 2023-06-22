# Node.js Practice

## Technologies Used

- Node.js 18.15.0
- Typescript 4.9.5
- Express 4.18.2
- TypeORM 0.3.12
- Postgres 14
- Nodemon 2.0.21
- Docker

## Getting Started

1. Clone the repo

   ```
   https://github.com/RubyYRHsiao/node-typeorm.git
   ```

2. Create a database with Docker
    - pull image
        ```
        docker pull postgres:alpine
        ```
    - run container
         ```
         docker run --name <container_name> -e POSTGRES_PASSWORD=password -d -p 15432:5432 postgres:alpine
         ```

3. Run server
    - cd project folder
       ```
       cd node-typeorm
       ```
    - install node_modules
       ```
       npm i
       ```
    - run server
       ```
       npm start
       ```
