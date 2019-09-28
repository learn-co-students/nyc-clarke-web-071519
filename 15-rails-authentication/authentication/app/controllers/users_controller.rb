class UsersController < ApplicationController
  # def authenticate
  #   @user = User.find_by(email: params[:user][:email])

  #   if @user.authenticate(params[:user][:password])
  #     session[:poop] = @user.id

  #     redirect_to user_path(@user)
  #   else
  #     flash[:error] =  "Incorrect username or password"
  #     redirect_to login_path
  #   end
  # end

  def show
    render :show
  end
end
