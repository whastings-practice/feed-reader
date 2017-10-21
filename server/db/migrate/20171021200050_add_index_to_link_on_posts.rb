class AddIndexToLinkOnPosts < ActiveRecord::Migration[5.1]
  def change
    add_index :posts, :link
  end
end
