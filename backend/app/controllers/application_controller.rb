class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :authorized?

  def authorized?
    render json: { error: 'Please sign-in for access' } unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def current_user
    auth_header = request.headers['Authorization']
    if auth_header
      user_token = auth_header.split(' ')[1]
      begin
        @user_id = JWT.decode(user_token, Rails.application.secrets.secret_key_base[0])[0]['user_id']
      rescue JWT::DecodeError
        nil
      end
    end
    @user = User.find(@user_id) if @user_id
  end
end
