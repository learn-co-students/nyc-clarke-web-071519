require 'sqlite3'
require 'pry'

class Tea
  DB = SQLite3::Database.new "tea.db"

  attr_accessor :name
  attr_reader :id

  def initialize(name, description, id = nil)
    @id = id
    @name = name
    @description = description
  end

  def description=(description)
    @description = description
    DB.execute("UPDATE teas SET description='#{description}' WHERE id='#{self.id}'")
  end

  def self.find_by_name(name)
    tea_data = DB.execute("SELECT * from teas WHERE name='#{name}' LIMIT 1")
    Tea.new(tea_data[0][1], tea_data[0][2], tea_data[0][0])
  end

  def self.create(name, desc)
    # update the database
    DB.execute("INSERT INTO teas (name, description) VALUES ('#{name}', '#{desc}')")
    the_tea_we_just_created = DB.execute("SELECT id from teas WHERE name = '#{name}'")

    Tea.new(name, desc, the_tea_we_just_created[0][0])
    # return a new instance of tea
  end

  def self.all
    DB.execute("SELECT * FROM teas").map do |tea_data|
      Tea.new(tea_data[1], tea_data[2], tea_data[0],)
    end
  end
end

binding.pry