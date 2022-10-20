class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions, id: :uuid do |t|
      t.string :title
      t.decimal :amount
      t.string :gen_ledger_account
      t.uuid :user_id
      t.timestamps
    end
  end
end
