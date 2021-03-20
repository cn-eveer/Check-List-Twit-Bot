Rails.application.routes.draw do
  root to: 'top#index'

  get   '/login',  to: 'top#index'
  get   '/logout', to: 'top#index'
  get   '/signup', to: 'top#index'
  resources :tweets, only: [:new, :create] do
    collection do
      get 'post'
      get 'congrats'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :sessions, only: :create
      resources :user, only: :create
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
    end
  end
end
