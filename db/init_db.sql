DROP DATABASE IF EXISTS mydb;

CREATE DATABASE mydb;

USE mydb;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    bio TEXT,
    PRIMARY KEY (id)
);

INSERT INTO users (id, first_name, last_name, email, gender, bio)
VALUES (1, 'Kort', 'Deluze', 'kdeluze0@mashable.com', 'Male', 'engineer robust convergence');

INSERT INTO users (id, first_name, last_name, email, gender, bio)
VALUES (2, 'Prudence', 'Guiness', 'pguiness1@slashdot.org', 'Female', 'deploy robust channels');

INSERT INTO users (id, first_name, last_name, email, gender, bio)
VALUES (3, 'Garvey', 'Pallister', 'gpallister2@godaddy.com', 'Male', 'deploy best-of-breed networks');

INSERT INTO users (id, first_name, last_name, email, gender, bio)
VALUES (4, 'Winona', 'Ambrosi', 'wambrosi3@bigcartel.com', 'Female', 'benchmark frictionless mindshare');

INSERT INTO users (id, first_name, last_name, email, gender, bio)
VALUES (5, 'Grier', 'Whyteman', 'gwhyteman4@domainmarket.com', 'Female', 'whiteboard extensible channels');
