class FeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :url
  has_many :posts
end
