class AddReferencesToUsersFromChecklists < ActiveRecord::Migration[6.1]
  def change
    add_reference :checklists, :user, foreign_key: true
  end
end
