class User
  attr_accessor :username
  attr_reader :bio, :join_date

  @@all = []

  def initialize(username)
    @username = username
    @bio = ""

    @@all << self
  end

  def fweets
    my_fweets = []

    Fweet.all.each do |fweet|
      if fweet.user == self
        my_fweets << fweet
      end
    end

    my_fweets


    Fweet.all.select do |fweet|
      fweet.user == self
    end
  end

  def self.all
    @@all
  end

end