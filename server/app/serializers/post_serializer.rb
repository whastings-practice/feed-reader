class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :feed_id
end
