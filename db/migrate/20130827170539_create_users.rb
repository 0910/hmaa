class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_namer
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
