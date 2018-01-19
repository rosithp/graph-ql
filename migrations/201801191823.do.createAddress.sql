CREATE TABLE IF NOT EXISTS "address"(
  "id"                SERIAL            PRIMARY KEY  NOT NULL,
  "studentId"         SERIAL            NOT NULL,
  "city"              VARCHAR(100)      NOT NULL,
  "state"             VARCHAR(100)      NOT NULL,
  "country"           VARCHAR(200)      NOT NULL
);
