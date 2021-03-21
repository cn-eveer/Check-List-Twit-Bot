class Api::V1::BotController < ApplicationController
  include CurrentUserConcern
  before_action :set_bot, except: :new

  def index
    items = []
    lists = Checklist.where(username: @current_user[:username])
    lists.each do |list|
      temp = {}
      if list[:finish_at] < Time.now && list[:if_finish] == false
        temp[:id] = list[:id]
        temp[:title] = list[:title]
        temp[:finish_at] = list[:finish_at]
        items << temp
      end
    end
    render json: items
  end

  def create    
    if params[:item][:id].present? && params[:item][:answer].present?
      tweet = Checklist.find_by(id: params[:item][:id])
      status = "【#{tweet.username}】さんが『#{tweet.title}』を達成できま"
      if params[:item][:answer]
        status += "した。"
      else
        status += "せんでした。"
      end
      @client.update(status)
      tweet.if_finish = !tweet.if_finish
      tweet.save!
    end
  end

  def set_bot
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = "tsPRWGyiTjlg3HpXXU8YuN2CG"
      config.consumer_secret = "f1DLWH8TWoMjr81CsrxTipAvapJ3LCRW3y2cYa1vZu9civYOTW"
      config.access_token = "1372173320951529474-gBoUEnM3F2qFKV5iEk3PC0GkREerYm"
      config.access_token_secret = "tv3ECL6m89Yp8P0P6PbGlwcqJTvyj4rEQEoKMO0ck8TCs"
    end
  end
end
