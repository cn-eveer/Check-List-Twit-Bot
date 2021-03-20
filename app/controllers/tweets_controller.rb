class TweetsController < ApplicationController
  include CurrentUserConcern
  before_action :twitter_client, except: :new

  def twitter_client
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = "tsPRWGyiTjlg3HpXXU8YuN2CG"
      config.consumer_secret = "f1DLWH8TWoMjr81CsrxTipAvapJ3LCRW3y2cYa1vZu9civYOTW"
      config.access_token = "1372173320951529474-gBoUEnM3F2qFKV5iEk3PC0GkREerYm"
      config.access_token_secret = "tv3ECL6m89Yp8P0P6PbGlwcqJTvyj4rEQEoKMO0ck8TCs"
    end
  end

  def new
    @items = Checklist.all
    current_name = @current_user[:username]
    if Checklist.find_by(username: current_name).present?
      @tweets = Checklist.where(username: current_name)
      p "#{@tweets} new"
    end
    #@tweets = @current_user.tweets.all
    @tweet = @current_user.tweets.new
  end

  #def create
    #@current_user.tweets.create(create_params)これもいらない
    #redirect_back(fallback_location: new_tweet_path)
  #end

  def post
    #Checklistのusernameがcurrent_userの中からfirstをツイートする。
    p @current_user[:username]
    tweet = Checklist.find_by(username: @current_user[:username])
    p "#{tweet }post"
    status = "【#{tweet.username}】さんが『#{tweet.title}』を達成できませんでした。"
    #tweet = @current_user.tweets.order(id: :desc).first
    #status = "【#{tweet.user.username}】さんが『#{tweet.text}』を達成できませんでした。"
    @client.update(status)
  end

  def congrats
  end

  private
  def create_params
    params.require(:tweet).permit(:text)
  end

end
