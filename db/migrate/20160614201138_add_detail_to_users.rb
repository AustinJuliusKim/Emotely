class AddDetailToUsers < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
  end
end
