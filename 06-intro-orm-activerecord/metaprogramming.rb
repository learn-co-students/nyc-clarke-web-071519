require 'pry'

class Student
  attr_accessor :name, :grade, :age

  def initialize(student_hash)
    student_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

end

student1 = Student.new(name: "Tony", grade: "C+")

binding.pry