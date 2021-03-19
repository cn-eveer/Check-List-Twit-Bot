Rails.application.routes.draw do
  root to: 'top#index'
  
  get   '/signin',  to: 'top#index'
  get   '/main', to: 'top#index'
  get   '/chat', to: 'top#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: :create 
      resources :user, only: :create
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
    end
  end
end
