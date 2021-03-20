class Checklist < ApplicationRecord
  #belongs_to :user
  has_many :users
  validates :username, presence: true
end
