require 'pry'
# class method is available to the class definition. It is NOT available to instances of that class

# instance are available to instances but not the class

# class variables are available to class and instances

# when self is INSIDE of an instance method, self refers to the instance.

# when self is OUTSIDE of an instance method, it refers to the class.



class Shoe
  # size, brand, color, condition
  attr_reader :size, :brand, :color, :condition
  @@all = []

  def initialize(size, brand, color)
    
    @size = size
    @brand = brand
    @color = color
    @condition = "new"
    
    @@all << self
  end
  
  
  # instance methods
  def wear
    # self is referring to the instance that called this method
    @condition = "used"
  end

  # class methods

  def self.all
    @@all
  end

end


shoe1 = Shoe.new(4, "nike", "white")
shoe2 = Shoe.new(2, "reebok", "red")
shoe3 = Shoe.new(6, "adidas", "blue")

binding.pry