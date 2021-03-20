class Checklist < ApplicationRecord
  has_many :users

  validates :username, :finish_at, presence: true
end
