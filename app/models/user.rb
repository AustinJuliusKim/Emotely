class User < ActiveRecord::Base
  has_secure_password
  attr_reader :password

  def password=(unecrypted_password)
    unless unecrypted_password.empty?
      @password = unecrypted_password
      self.password_digest = BCrypt::Password.create(unecrypted_password)
    end
  end

  def authenticate(unecrypted_password)
    if BCrypt::Password.new(self.password_digest) == unecrypted_password
      return self
    else
      return false
    end
  end
end
