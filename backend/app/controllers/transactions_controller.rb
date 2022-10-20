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

  def transaction_params 
    params.require(:transaction).permit(
        :title, 
        :user_id, 
        :amount, 
        :gen_ledger_account
    )
end

  def find_transaction
    @transaction = Transaction.find_by(id: params[:id])
  end
  
end
