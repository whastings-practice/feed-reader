module Api
  class PostsController < ApplicationController
    def index
      render json: Feed.find(params[:feed_id]).posts, each_serializer: PostSerializer
    end
  end
end
