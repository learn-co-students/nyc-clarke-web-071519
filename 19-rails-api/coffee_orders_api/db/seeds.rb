# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[
    {
      "name": "Cafe Latte",
      "price": "20"
    },
    {
      "name": "Americano",
      "price": "15"
    },
    {
      "name": "Espresso",
      "price": "25"
    },
    {
      "name": "Iced Frappe",
      "price": "50"
    }
  ].each do |order| 
    Order.create(order)
  end