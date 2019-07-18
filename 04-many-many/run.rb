require 'pry'
require_relative 'user'
require_relative 'movie'
require_relative 'review'


movie1 = Movie.new("Aladdin")
movie2 = Movie.new("Lion King")
movie3 = Movie.new("The Matrix")
movie4 = Movie.new("The Wood")

user1 = User.new("dude_king_cool")
user2 = User.new("rainbow_pony")
user3 = User.new("jSHOCK")

Review.create("I no longer have the WILL to live.", user1, movie1)
Review.create("I'd be LION if I told you this was a bad movie 😏", user1, movie2)

Review.create("It was super realistic :o", user2, movie2)
Review.create("I heard Aladdin was bad", user2, movie1)

Review.create("It is BEYOND great", user3, movie2)
Review.create("Wouldn't DODGE this one ⁍", user3, movie3)
Review.create("I SAW THE GUY FROM THE WOOD TODAY!", user3, movie4)

binding.pry
