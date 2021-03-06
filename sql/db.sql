CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    login text NOT NULL CHECK (login <> ''),
    password text,
    age integer
);

INSERT INTO users(login, password, age)
VALUES('John', '121323', 23)
INSERT INTO users(login, password, age)
VALUES('Ann', '102938', 27)

CREATE TABLE IF NOT EXISTS groups(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    permission TEXT [],
    userId INTEGER REFERENCES users(id)
);

INSERT INTO groups(name, permission, userId)
    VALUES('firstGroup', '{READ, WRITE}', 1)