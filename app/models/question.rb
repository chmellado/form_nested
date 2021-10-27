class Question < ApplicationRecord
  attr_accessor :question, :survey_id, :answer
  belongs_to :survey
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers, :reject_if => lambda { |a| a[:content].blank? }, allow_destroy: true
end
