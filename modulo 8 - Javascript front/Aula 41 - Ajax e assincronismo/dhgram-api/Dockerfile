FROM mysql

ENV MYSQL_DATABASE=dhgram_api
ENV MYSQL_ALLOW_EMPTY_PASSWORD=true

ADD dhgram-api.sql /docker-entrypoint-initdb.d/script.sql
RUN chmod -R 775 /docker-entrypoint-initdb.d