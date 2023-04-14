-- Up
CREATE TABLE Lists(
  id INTEGER NOT NULL,
  name string,
  PRIMARY KEY (id)
);

CREATE TABLE Items(
  id INTEGER NOT NULL,
  name string,
  type INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (type) REFERENCES Lists(id)
);

-- Down
DROP TABLE Items;
DROP TABLE Lists;
