class User < ActiveRecord::Base
  attr_accessible :email, :first_namer, :last_name
end
