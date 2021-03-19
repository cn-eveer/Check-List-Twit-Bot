Rails.application.routes.draw do
  root to: 'toppages#index'
  get   '/signin',  to: 'toppages#index'
  get   '/main', to:'toppages#index'
  get   '/chat', to:'toppages#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
