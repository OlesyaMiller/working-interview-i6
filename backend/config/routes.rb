Rails.application.routes.draw do
  resources :users
  resources :transactions
  get '/sorted', to: 'transactions#sorted'
end


