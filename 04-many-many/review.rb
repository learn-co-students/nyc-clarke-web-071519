class Review
  attr_accessor :content, :user, :movie

  @@all = []

  def initialize(content, user, movie)
    @content = content
    @user = user
    @movie = movie
  end

  def self.create(content, user, movie)
    @@all << Review.new(content, user, movie)
  end

  def self.all
    @@all
  end

  def self.all_content
    # Review.all.map { |review| review.content }
    @@all.map { |review| review.content }
  end
  
end