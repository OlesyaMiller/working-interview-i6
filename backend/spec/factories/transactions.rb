require 'faker'

FactoryBot.define do
    factory :transaction do
      title { Faker::Game.title }
      amount { Faker::Number.decimal(l_digits: 2) }
      gen_ledger_account { Faker::Fantasy::Tolkien.poem }
    end
end 