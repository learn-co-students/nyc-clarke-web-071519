require 'pry'
require_relative 'lib/user'
require_relative 'lib/fweet'

%w(coffee_dad xXreddarknessXx smelly_cheese_ball rainbow_pony dude_king_cool).each do |username|
  User.new(username)
end

[
  "getting coffee...",
  "need coffee...",
  "It is time for them to pay for what they have done."
].each do |fweet_content|
  Fweet.new(fweet_content, User.all[0])
end

binding.pry