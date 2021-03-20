class User < ApplicationRecord
  has_secure_password
  
  has_many :checklists
  
  validates_presence_of :email, :username, :password
  validates_uniqueness_of :email
  validates :username, uniqueness: { case_sensitive: true }
end
