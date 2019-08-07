class CreateCereals < ActiveRecord::Migration
  def change
    create_table :cereals do |t|
      t.string :name
      t.integer :rating
    end
  end
end
