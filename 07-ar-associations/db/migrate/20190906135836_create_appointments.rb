class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer :barber_id
      t.integer :client_id

      t.string :time
    end
  end
end
