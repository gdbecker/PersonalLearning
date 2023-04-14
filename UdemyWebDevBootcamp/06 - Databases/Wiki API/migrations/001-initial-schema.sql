-- Up
CREATE TABLE Articles (
  id INTEGER NOT NULL,
  title STRING,
  content STRING,
  PRIMARY KEY (id)
);

-- Down
DROP TABLE Articles;
