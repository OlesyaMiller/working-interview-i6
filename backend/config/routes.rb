Rails.application.routes.draw do
  get 'transactions/index'
  get 'transactions/create'
  get 'users/index' 
  get 'users/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
