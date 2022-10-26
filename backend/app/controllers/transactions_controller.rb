class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all
    render json: transactions
  end

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
        render json: transaction
    else
        render json: { message: transaction.errors }, status: 400
    end
  end

  private

  def transaction_params 
    params.require(:transaction).permit(
        :title, 
        :user_id, 
        :amount, 
        :gen_ledger_account
    )
  end
  
end
