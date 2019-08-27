class CreateBagels < ActiveRecord::Migration[5.2]
  def change
    create_table :bagels do |t|
      t.string :name
      t.string :flavor
      t.integer :price
      t.boolean :toasted
      t.boolean :scooped

      t.timestamps
    end
  end
end
