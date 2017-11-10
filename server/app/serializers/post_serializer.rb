class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :feed_id, :published_at, :published_at_formatted

  def published_at_formatted
    object.published_at&.strftime('%A, %b %d %Y %l:%M %p')
  end
end
