module Api
  class FeedsController < ApplicationController
    def index
      render json: Feed.all
    end

    def show
      render json: Feed.find(params[:id])
    end

    def create
      feed_data = FeedFetcher.fetch_feed(feed_params[:url])

      feed = Feed.new(feed_data[:feed])
      feed_data[:posts].each { |post_data| feed.posts.build(post_data) }

      if feed.save
        render json: feed
      else
        render json: { errors: feed.errors }, status: 422
      end
    rescue RSS::NotWellFormedError
      response = {
        errors: {
          url: 'This URL does not point to a valid feed',
        },
      }
      render json: response, status: 422
    end

    private

    def feed_params
      params.require(:feed).permit(:url)
    end
  end
end
