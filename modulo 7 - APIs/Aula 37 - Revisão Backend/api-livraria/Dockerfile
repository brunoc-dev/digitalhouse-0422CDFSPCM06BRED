FROM mysql

ENV MYSQL_DATABASE=livraria
ENV MYSQL_ALLOW_EMPTY_PASSWORD=true

ADD livraria_db.sql /docker-entrypoint-initdb.d/script.sql
RUN chmod -R 775 /docker-entrypoint-initdb.d

