require 'date'

class Fweet
  attr_reader :content, :date

  attr_accessor :user


  @@all = []

  def initialize(content, user)
    @content = content
    @date = DateTime.now
    @user = user

    @@all << self
  end

  def self.all
    @@all
  end
end