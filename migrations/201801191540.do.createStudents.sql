CREATE TABLE IF NOT EXISTS "students"(
  "id"                              SERIAL            PRIMARY KEY  NOT NULL,
  "firstName"                       VARCHAR(100)      NOT NULL,
  "lastName"                        VARCHAR(100)      NOT NULL,
  "email"                           VARCHAR(200)      NOT NULL
);
