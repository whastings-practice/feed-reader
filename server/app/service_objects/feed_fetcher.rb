require 'rss'

module FeedFetcher
  def self.fetch_feed(url)
    result = RSS::Parser.parse(url)
    {
      feed: {
        title: result.channel.title,
        url: url,
      },
      posts: format_posts(result.items),
    }
  end

  def self.fetch_posts(url)
    results = RSS::Parser.parse(url).items
    format_posts(results)
  end

  private

  def self.format_posts(posts)
    posts.map do |post|
      {
        title: post.title,
        link: post.link,
        description: post.description,
        published_at: post.pubDate,
      }
    end
  end
end
