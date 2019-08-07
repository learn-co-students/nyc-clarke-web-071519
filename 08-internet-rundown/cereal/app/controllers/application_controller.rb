require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    @cereal = Cereal.order(rating: :desc).first
    erb :welcome
  end

  get '/cereals' do
    @cereals = Cereal.order(rating: :desc)
    erb :index
  end

  # to take what the user gave me and create a new cereal
  post '/cereals' do
    Cereal.create(name: params[:cereal_name], rating: params[:cereal_rating])
    redirect to '/cereals'
    # erb :index # does not work because we don't have the @cereals variable here
  end

  # show the user a form that they can fill out to create a new cereal
  get '/cereals/new' do
    erb :new
  end
  
  
  # our goal is to show a page with information about ONE specific cereal
  get '/cereals/:id' do
    # binding.pry
    @cereal = Cereal.find_by(id: params[:id])
    erb :show
  end

  get '/cereals/:id/edit' do
    @cereal = Cereal.find_by(id: params[:id])
    erb :edit
  end

  # goal: find the cereal we need to update, and then update it with the input we got from the form
  put '/cereals/:id' do
    @cereal = Cereal.find_by(id: params[:id])
    # @cereal.name = new_cereal_name
    # @cereal.rating = new_cereal_rating
    # @cereal.save
    @cereal.update(
      name: params[:cereal_name], 
      rating: params[:cereal_rating]
    )

    redirect to "/cereals/#{@cereal.id}"
  end


  delete '/cereals/:id' do
    @cereal = Cereal.find_by(id: params[:id])
    @cereal.destroy
    redirect to '/cereals'
  end

end
