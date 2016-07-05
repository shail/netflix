require './netflix_cookies.rb'
require 'mechanize'
log = Logger.new('log.txt')
log.level = Logger::DEBUG

mechanize = Mechanize.new { |agent|
  agent.log = log
  agent.user_agent_alias = 'Mac Safari'
  agent.ssl_version = 'SSLv3'
  agent.verify_mode = OpenSSL::SSL::VERIFY_NONE
}

NETFLIX_COOKIES.each do |cookie|
  mechanize.cookie_jar.add!(cookie)
end

begin
  mechanize.get('https://www.netflix.com/viewingactivity') do |page|
    p page
  end
rescue Mechanize::ResponseReadError => e
  page = e.force_parse
end
