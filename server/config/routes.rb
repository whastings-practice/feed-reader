Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :feeds, only: [:index] do
      resources :posts, only: [:index]
    end
  end
end
