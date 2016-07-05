require 'sqlite3'

db = SQLite3::Database.new "activity.db"

rows = db.execute <<-SQL
  create table viewing_histories (
    date DATETIME,
    name varchar(256),
    UNIQUE(date, name) ON CONFLICT REPLACE
  );
SQL
