class Transaction < ApplicationRecord
    belongs_to :user
    validates :title, :amount, :gen_ledger_account, presence: true
end
