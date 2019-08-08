class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient
  validates :description, :cocktail_id, presence: true, allow_blank: false
  validates :ingredient_id, presence: true
  validates :cocktail, uniqueness: { scope: :ingredient }
end
