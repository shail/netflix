require 'sqlite3'

db = SQLite3::Database.new "activity.db"

File.readlines("/Users/shailpatel/learn_react/netflix/scripts/activity.txt").each do |line|
  date = DateTime.strptime(line.match(/[0-9]{0,2}\/[0-9]{0,2}\/[0-9]{0,2}/)[0], "%D").strftime("%Y-%m-%d") + " 12:00:00"
  name = line.split(" ")[1..-1].join(" ")
  db.execute "insert into viewing_histories (name, date) values (?, ?)", [name, date]
end
