Rails.application.routes.draw do
  root to: 'top#index'
  
  # Chat
  get   '/chat', to: 'top#index'

  # Session
  get '/logout', to: 'top#index'   
  get '/signup', to: 'top#index'

  # Checklist
  get '/checklist', to: 'top#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: :create 
      resources :user, only: :create
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"

      resources :checklists, only: [ :index, :create ]
    end
  end
end
