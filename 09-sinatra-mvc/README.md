# Sinatra and MVC (Model View Controller)
You may have experienced from project week of mod 1 that over time, our run file started to get really hard to maintain. When something broke, it takes a while to find the bug. When we write new features, we hold our breath hoping we didn't break anything else. **Managing complexity is one of the most important things you'll do as a programmer.** One of the patterns we have to help us organize code and manage complexity is *model-view-controller*.

## Model
We should already be pretty familiar with this layer. This is the domain-modeling that we pratice in mod 1. It is responsible for retrieving and updating data. The classes and their relationship represents real world things/concepts and hold our business logic.

## View
This is what the users sees and interacts with. In mod 1, we built command line applications so our view is what we show to users in the terminal. In mod 2, we'll be building web applications so the view be even more prominent (HTML/CSS).

## Controller
This connects the model and the view. The controller takes in user input and decides what part of the business logic needs to happen. It then decides what view to return back to the user.


## The request response life-cycle:
```
(client makes a request) -> (is our server able to handle this request?) -> (model fetches/updates data) -> (return some response to the user)
```