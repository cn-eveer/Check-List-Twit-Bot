module BotConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_twitter_bot
  end

  def set_twitter_bot
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = "tsPRWGyiTjlg3HpXXU8YuN2CG"
      config.consumer_secret = "f1DLWH8TWoMjr81CsrxTipAvapJ3LCRW3y2cYa1vZu9civYOTW"
      config.access_token = "1372173320951529474-gBoUEnM3F2qFKV5iEk3PC0GkREerYm"
      config.access_token_secret = "tv3ECL6m89Yp8P0P6PbGlwcqJTvyj4rEQEoKMO0ck8TCs"
    end
  end
end