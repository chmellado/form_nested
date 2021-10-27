class Survey < ApplicationRecord
  has_many :questions, dependent: :destroy
  accepts_nested_attributes_for :questions, :reject_if => lambda { |a| a[:content].blank? }, allow_destroy: true
  # accepts_nested_attributes_for :questions, reject_if: ->(:content){ attributes['name'].blank? }, allow_destroy: true
  # accepts_nested_attributes_for :relationship, reject_if: ->(attributes){ attributes['name'].blank? }, allow_destroy: true
end
