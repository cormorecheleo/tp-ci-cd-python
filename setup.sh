#!/bin/bash
echo "run migration bash"
echo sqlpass
mysql -uleo -psqlpass < /docker-entrypoint-initdb.d/setup.sql