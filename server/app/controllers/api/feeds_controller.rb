module Api
  class FeedsController < ApplicationController
    def index
      render json: Feed.all
    end
  end
end
