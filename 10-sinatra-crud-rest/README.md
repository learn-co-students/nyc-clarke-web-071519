# Sinatra CRUD and REST
In mod 1 we learned about CRUD. A lot of what we do in web application boils down to create, read update and delete. REST is a pattern that we can follow when building web application because this pattern lends itself especially well to CRUD operations.


### In general, a RESTful web application will have the following functionality.
Let's say we have an app to keep track of cereal brands:

| verb      |  path              | description                                                                              |
|-----------|--------------------|------------------------------------------------------------------------------------------| 
| GET       | '/cereals'         | shows a list of all cereals                                                              |
| GET       | '/cereals/:id      |  shows info about ONE particular cereal                                                  |
| GET       | '/cereals/new      | shows a form so user can fill out to make a new cereal                                   |
| POST      | '/cereals          | when the user press submit on the form, we make a new cereal with the user input         |
| GET       | '/cereals/:id/edit | shows a form so user can fill out to update an existing cereal                           |
| PUT/PATCH | '/cereals/:id      | when the user press submit on the form, we update an existing cereal with the user input |
| DELETE    | '/cereals/:id      | deletes an existing cereal                                                               |

## Getting params from requests:
Controller configuration:
```ruby
get '/cereals/:id' do
  params[:id]
end
```

## Getting params from requests sent by forms:
form:
```html
<form action="/cereal" method="POST">
  <input name="cereal_name" type="text" />
  <input name="cereal_rating" type="text" />
  <button type="submit">Submit</button>
</form>
```
controller configuration:
```ruby
post '/cereals' do
  params[:cereal_name]
  params[:cereal_rating]
end
```

## Lean Controllers Fat Models
In general, the view should only be in charge of rendering info to the user. Don't put logic in the view. As best as you can, abstract logic in to the models to keep your controllers simple.
