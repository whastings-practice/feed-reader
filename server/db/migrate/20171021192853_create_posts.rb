class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.string :link
      t.references :feed, foreign_key: true

      t.timestamps
    end
  end
end
