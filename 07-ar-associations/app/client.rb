class Client < ActiveRecord::Base
  has_many :appointments
  has_many :barbers, through: :appointments
end