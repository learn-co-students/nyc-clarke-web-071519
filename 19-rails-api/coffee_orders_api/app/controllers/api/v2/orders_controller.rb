class Api::V2::OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: OrderSerializer.new(@orders)
  end
end