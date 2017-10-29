module Api
  class FeedsController < ApplicationController
    def index
      render json: Feed.all
    end

    def show
      render json: Feed.find(params[:id])
    end
  end
end
