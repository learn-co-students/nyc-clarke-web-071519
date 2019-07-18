class Movie
  attr_reader :title

  def initialize(title)
    @title = title
  end

  def reviews
    # reviews_about_this_movie = []

    # Review.all.each do |review|
    #   if review.movie == self
    #     reviews_about_this_movie << review
    #   end
    # end

    # reviews_about_this_movie

    Review.all.select { |review| review.movie == self }
  end

  def users
    reviews.map { |review| review.user }
  end

  def reviews_content
    # review_content_for_this_movie = []

    # self.reviews.each do |review|
    #   review_content_for_this_movie << review.content
    # end

    # review_content_for_this_movie

    reviews.map { |review| review.content }
  end

end