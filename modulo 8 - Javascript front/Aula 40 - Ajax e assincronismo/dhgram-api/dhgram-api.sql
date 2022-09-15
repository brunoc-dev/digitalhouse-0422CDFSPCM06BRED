create database dhgram_api;

create table users(
    id int auto_increment primary key,
    name varchar(255),
    surname varchar(255),
    username varchar(255),
    password varchar(255),
    email varchar(255) not null,
);