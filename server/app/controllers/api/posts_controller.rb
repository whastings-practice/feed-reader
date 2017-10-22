module Api
  class PostsController < ApplicationController
    def index
      render json: Feed.find(params[:feed_id]).posts
    end
  end
end
