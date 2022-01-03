Rails.application.routes.draw do
  namespace :api do
    resources :users do
      collection do
        post '/login', to: 'users#login'
        get '/profile', to: 'users#user_profile'
      end
    end
  end
end
