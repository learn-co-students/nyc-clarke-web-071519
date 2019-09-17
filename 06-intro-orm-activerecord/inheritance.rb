require 'pry'

# Inheritance
class HouseHoldPet
  attr_reader :name, :breed

  @@all = []
  def initialize(name, breed, *other_args)
    @name = name
    @breed = breed
    @@all << self
  end

  def vocalization
    puts "The vocalization of this animal is:"
  end

  def self.all
    @@all
  end
end




class Cat < HouseHoldPet
  attr_reader :age, :owner

  @@all = []
  def initialize(name, breed, age, owner)
    super
    @age = age
    @owner = owner
  end

  def vocalization
    super
    puts "MEEOWWWWW!!!"
  end

  def self.all
    @@all
  end
end

class Dog < HouseHoldPet


  def vocalization
    puts "ARRRRFFFF!!!!"
  end
end

class Fish < HouseHoldPet
  def vocalization
    puts "...blub blub blub"
  end
end

cat1 = Cat.new("Patrick", "Tabby", 3, "Tony")
dog1 = Dog.new("Terry", "Terrier")

binding.pry


# Meta Programming