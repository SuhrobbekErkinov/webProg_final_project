create table users
(
    id        bigint auto_increment
        primary key,
    firstname varchar(255) not null,
    lastname  varchar(255) not null,
    email     varchar(255) not null,
    password  varchar(255) not null
);

