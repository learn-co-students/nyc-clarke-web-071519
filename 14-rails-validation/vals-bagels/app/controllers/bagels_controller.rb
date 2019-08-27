class BagelsController < ApplicationController
  def index
    @bagels = Bagel.all
    render :index
  end

  def new
    @bagel = Bagel.new
    render :new
  end

  def show
    
  end

  def create
    @bagel = Bagel.new(bagel_params)
    if @bagel.save
      # do something, probably save it to the database and then redirect
      redirect_to bagels_path
    else
      # maybe show them the same form, but with error messages
      flash[:errors] = @bagel.errors.full_messages
      redirect_to new_bagel_path
    end
  end

  def edit
    
  end

  def update
    
  end

  def delete
    
  end

  private

  def bagel_params
    params.require(:bagel).permit(:name, :price, :flavor, :toasted, :scooped)
  end
end
