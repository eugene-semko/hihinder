-- create db
create database hihi;
-- connect to db
\c hihi;
-- list of tables
\dt;

create TABLE Users(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    nickname VARCHAR(255),
    liked_posts integer[],
    created_posts integer[]
);

create TABLE Post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    author_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES Users (id),
    rating INTEGER,
);