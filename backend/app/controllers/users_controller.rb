class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
        render json: user
    else
        render json: { message: user.errors }, status: 400
    end
  end
end
