require 'pry'
require 'sinatra'

class App < Sinatra::Base

  get '/' do
    '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  Hello!
  <img src="https://http.cat/100">
</body>
</html>'
  end

  get '/shockness' do
    "Hello Jason!"
  end

  get '*' do
    p "========================="
    p "PIZZA! 🍕"
    p "========================="
    "error 404"
  end
end

