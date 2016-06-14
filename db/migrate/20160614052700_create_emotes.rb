class CreateEmotes < ActiveRecord::Migration
  def change
    create_table :emotes do |t|
      t.string :command
      t.string :url

      t.timestamps null: false
    end
  end
end
