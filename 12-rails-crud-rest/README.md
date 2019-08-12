# Rails CRUD and REST
### SWBATS:
* Create a CRUD application using rails.
* Create forms using: `form_tag`, `form_for` and `form_with`.
* Ensure that only specified params get through to the server using `strong params`.
* Describe when I might want a method to be `private`.

## Creating a CRUD application using rails.
* set up the database
* create the route to handle a request
  * *if this is a RESTful, you can use `resources` to save yourself some typing.*
* create the controller and the `action` that will handle the correponding request.
* Using the model, fetch/create/update the neccessary data from your controller.
* Create the view file to be returned to the user.

## `form_tag`, `form_for`, `form_with`
Remember, rails go by the credo: *convention over configuration*. This means that if we follow rails conventions, it will do a lot of the work for us and make our lives easier but the trade-off is that you give up control.

You can make forms several different ways.
  1) Hard-code the form (type the HTML yourself).
  2) use one of the form helpers.

### form_tag
When you are creating a form **without** an instance of the resource you are trying to create. Strikes a good balance between convention and configuration. For example, you may be creating a form for a non-restful action.
### form_for
When you are creating a form **with** an instance of the resource you are trying to create. If your request is RESTful, form_for will help you write concise and DRY view pages.
### form_with
Allows you to choose between `form_for` or `form_tag` based on the argument you pass into it.
* `<%= form_with url: '/the_url' %>` usage similar to form_tag.
* `<%= form_with model: @resource %>`: usage similar to form_for.

[docs.](https://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html#method-i-form_with)
[A blog about the differences.](https://medium.com/@tinchorb/form-with-building-html-forms-in-rails-5-1-f30bd60ef52d)

## Strong Params
It is unsafe to create resources before filtering the params to ensure the params makes sense. Rails helps us do this via `strong_params`.
* `params.require(:soda)` - we will only use the **:soda** key in params and params MUST contain this key or it is invalid.
* `params.permit(:soda)` - we will only use the **:soda** key in params if it is there.
* `params.require(:soda).permit(:name, :flavor)` - we will only use the **:soda** key in params and it MUST contain this key or it is invalid. Within the hash that is paired with the **:soda** key, we will only use **:name** and **:flavor** (if it is there).

[More Here](https://stackoverflow.com/questions/45748187/what-does-require-do-when-defining-strong-parameter#answers)

## Private Methods
[Read this stackoverflow thread](https://stackoverflow.com/questions/2620699/why-private-methods-in-the-object-oriented)
