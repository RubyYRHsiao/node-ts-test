# Node.js Practice

## Technologies Used

- Node.js 18.15.0
- Typescript 4.9.5
- Express 4.18.2
- TypeORM 0.3.12
- MSSQL 7.3.5
- Nodemon 2.0.21
- Docker

## Getting Started

1. Clone the repo

   ```
   https://github.com/RubyYRHsiao/node-ts-test.git
   ```

2. Create a database with Docker
    - pull image
        ```
        docker pull mcr.microsoft.com/mssql/server:2022-latest
        ```
    - run container
         ```
         sudo docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=P@ssw0rd" \
        -p 1433:1433 --name <container_name> --hostname <hostname> \
        -d \
        mcr.microsoft.com/mssql/server:2022-latest
         ```
    - exec container
         ```
         docker exec -it <container_name> bash
         ```
    - create DB
         ```
         /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "P@ssw0rd"
         ```
         ```
         CREATE DATABASE TestDB;
         SELECT Name from sys.databases;
         GO
         ```

3. Run server
    - cd project folder
       ```
       cd node-ts-test
       ```
    - install node_modules
       ```
       npm i
       ```
    - run server
       ```
       npm start
       ```