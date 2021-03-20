class CreateTitles < ActiveRecord::Migration[6.1]
  def change
    create_table :checklists do |t|
      t.text :title
      t.text :detail
      t.string :username 
      t.boolean :if_finish, default: false
      t.datetime :finish_at, null: false
      t.timestamps
    end
  end
end
