Rails.application.routes.draw do
  resources :answers
  resources :questions
  resources :surveys
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
