-- Up
CREATE TABLE Posts (
  id INTEGER NOT NULL,
  title STRING,
  body STRING,
  PRIMARY KEY (id)
);

-- Down
DROP TABLE Posts;
