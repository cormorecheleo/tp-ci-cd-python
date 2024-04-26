FROM mysql:latest
LABEL maintainer="leo.cormorehe@ynov.com"
COPY ./sqlfiles /docker-entrypoint-initdb.d
COPY setup.sh ./setup.sh
COPY sqlfiles/setup.sql /docker-entrypoint-initdb.d/setup.sql
CMD ["sh", "./setup.sh" ]
EXPOSE 3306