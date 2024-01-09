-- Had to run this query within the 'adventureworks' database in appserver3001
-- SQL authentication wouldn't work, had to switch on 'System assigned managed identity' in 'Identity' of settings for the server
-- felt amazing getting this to work haha

CREATE USER appworkspace3001 FROM EXTERNAL PROVIDER

GRANT ADMINISTER DATABASE BULK OPERATIONS TO appworkspace3001;
GRANT SELECT TO appworkspace3001;