require 'pry'

class App
  def call(request_info)

    if request_info["REQUEST_PATH"] == '/'
      status_code = 200
      header = {}
      body = [
        '<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello AGAIN!</h1>
    <img src="https://http.cat/200" />
  </body>
        </html>'
      ] # or {}

      return [status_code, header, body]

    elsif request_info["REQUEST_PATH"] == '/poop'
      status_code = 200
      header = {}
      body = [
        '<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    💩💩💩💩💩💩💩
  </body>
        </html>'
      ] # or {}

      return [status_code, header, body]
    end
  end
end

