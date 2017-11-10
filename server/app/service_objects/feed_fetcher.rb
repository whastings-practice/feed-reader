require 'rss'

module FeedFetcher
  def self.fetch(feed)
    results = RSS::Parser.parse(feed.url).items
    results.each do |result|
      # TODO: Change this to not be an N+1 query.
      unless feed.posts.where(link: result.link).exists?
        feed.posts.create!(
          title: result.title,
          link: result.link,
          description: result.description,
          published_at: result.pubDate,
        )
      end
    end
    nil
  end
end
