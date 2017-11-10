module Api
  class PostsController < ApplicationController
    def index
      posts = Feed.find(params[:feed_id]).posts.order(published_at: :desc)
      render json: posts, each_serializer: PostSerializer
    end
  end
end
