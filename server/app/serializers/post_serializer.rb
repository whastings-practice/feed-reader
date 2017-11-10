class PostSerializer < ActiveModel::Serializer
  include ActionView::Helpers::SanitizeHelper

  WHITELISTED_HTML_TAGS = %w(
    p h1 h2 h3 h4 h5 h6 figure figcaption code pre strong em span a ul ol li
  )

  attributes :id, :title, :description, :link, :feed_id, :published_at, :published_at_formatted

  def description
    sanitize(object.description, tags: WHITELISTED_HTML_TAGS)
  end

  def published_at_formatted
    object.published_at&.strftime('%A, %b %d %Y %l:%M %p')
  end
end
