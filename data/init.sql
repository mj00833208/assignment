CREATE DATABASE IF NOT EXISTS assignment-bayer;
USE assignment-bayer;
source /docker-entrypoint-initdb.d/database.sql;