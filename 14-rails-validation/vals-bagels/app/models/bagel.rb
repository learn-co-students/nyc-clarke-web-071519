class Bagel < ApplicationRecord
  validates :name, { presence: true, uniqueness: { case_sensitive: false } }
  validates :price, { presence: true, numericality: { only_integer: true } }

  validates :flavor, { presence: true }
  validate :scooped_has_to_be_false

  private

  def scooped_has_to_be_false

    if self.scooped
      errors.add(:scooped, "That is disgusting, please reconsider your decisions in life. - Valentino")
    end
  end
end
