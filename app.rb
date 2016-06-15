require 'sinatra'

get '/' do
  redirect '/index.html'
end

get '/timestamp' do
  Time.now.utc.iso8601
end
