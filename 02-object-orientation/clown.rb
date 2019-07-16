require 'pry'

class Clown
  # just syntatic sugar for a simple getter method
  attr_reader :name

  attr_writer :fear
  # just syntatic sugar for reader and writer methods
  attr_accessor :skill, :nickname

  def initialize(name, age, skill, fear, nickname = nil)
    # instance variables
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @nickname = nickname

    @clown_jokes = [
      "I’m a big fan of whiteboards. I find them quite re-markable.",
      "How many programmers does it take to change a light bulb?\n\n None – It’s a hardware problem",
      "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "In order to understand recursion you must first understand recursion.",
      "Whats the object oriented way to becoming wealthy?\n\n Inheritance.",
      "Changing random stuff until your program works is hacky and bad coding practice but if you do it fast enough it's machine learning and pays 4x current salary. - @smaine"
    ]
  end

  # getter method
  def age
    # if @age > 40
    #   puts "I don't wanna tell ya, beat it! 😡"
    # else
    #   @age
    # end
    @age
  end

  # setter method
  def name=(name)
    if name.length > 20
      puts "No one wants to hire a clown with a long name 😞"
    else
      @name = name
    end
  end

  def say_hi
    puts "Hi I'm #{name}"
    if !nickname.nil?
      puts "You also call me #{nickname}"
    end
  end

  def tell_joke
    # from an array of jokes, return a random 1
    puts @clown_jokes.sample
  end

  def tell_secret
    puts "pssttt... I am really afraid of #{fear}"
  end

  def perform
    say_hi
    sleep(1)
    puts ""
    tell_joke
    sleep(1)
    puts ""
    tell_secret
    sleep(1)
    puts ""
    puts "Was fun! See ya later 👋🤡"
  end


  # any method declared from this line forward will be 'private'
  private

  def fear
    @fear
  end

end









clown1 = Clown.new("Wacky", 33, "balloon animals", "porcupine")
clown2 = Clown.new("Bluster", 44, "juggling", "red noses")
clown3 = Clown.new("Krusty", 50, "hamburgers", "horses 🐴")
clown4 = Clown.new("Ronald", 25, "hamburglary 🕵🏻‍♂️", "spiders")
clown5 = Clown.new("Bozo", 18, "Unicycle", "other clowns")

clowns = [clown1, clown2, clown3, clown4, clown5]

# clowns.each do |clown|
#   sleep(2)
#   clown.perform
# end

# old_clowns = []

# clowns.each do |clown|
#   if clown.age > 30
#     old_clowns << clown.name
#   end
# end

# grab all clown instances that match
old_clowns = clowns.select { |clown| clown.age > 30 }
# transform into just the clown names for those instances
old_clowns = old_clowns.map { |clown| clown.name }








# clown1 = {
#   name: "Wacky",
#   age: 33,
#   skill: "make ballon animals",
#   fear: "porcupines"
# }

# clown2 = {
#   name: "Bluster",
#   age: 44,
#   skill: "juggling",
#   fear: "red noses"
# }

# clown3 = {
#   name: "Flaky",
#   age: 32,
#   skill: "pie throwing",
#   fear: "children"
# }

# clown4 = {
#   name: "Raspy",
#   age: 24,
#   skill: "haunting your dreams",
#   fear: "other clowns"
# }

# clown5 = {
#   name: "Krusty",
#   age: 39,
#   skill: "giving a creepy smile",
#   fear: "parties"
# }

binding.pry