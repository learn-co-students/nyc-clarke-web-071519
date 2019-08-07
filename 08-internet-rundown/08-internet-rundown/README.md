# Mod 2 Overview / Intro to the Internet

## Recap of Mod 1:
Recap of some things we learned last module:
* **Ruby** - strings, integers, arrays, hashes, etc...
* **Objects** - make models of real world things and concepts in code.
* **Domain Modeling** - Describe the program we want to build in terms of objects and their relationships to each other.
* **SQL** - Persisting state *(memory)* of objects into tables of rows and columns.
* **ORM** - Object Relational Mapper. Allows us to retrieve and store objects from a SQL database and Visa Versa. 
* **Active Record** - Connects our objects to tables in a SQL database. [docs]
* **CRUD** - Create Read Update Delete
(https://guides.rubyonrails.org/active_record_basics.html)

## Overview of Mod 2:
By the end of this module, you should be able to create a fullstack web application with either [sinatra](http://sinatrarb.com/) and or [ruby on rails](https://guides.rubyonrails.org/index.html).
* HTTP
  * Requests & Responses

* Sinatra
  * MVC
  * Model
  * View
  * Controller

* Rails
  * routes
  * rails helpers

* HTML/CSS

## Intro to the internet:
* The connection of many different networks (of computers). Connected as in having the ability to communicate with each other through wires, electromagnetic waves, others...?
  * There are cables that literally go across the ocean. This is how we can communicate with computers across continents (ableit more slowly).
  * Fun fact...
* IP address - Every device that is connected to the internet gets an IP address (usually assigned by the ISP internet service provider).
  * DNS - Domain Name Server: A computer that maps URLs as we (humans) know it to an IP address.
* nslookup
* traceroute
[more on this subject](https://www.youtube.com/watch?v=n_KghQP86Sw)

## HTTP - Requests and Responses
How computers communicate with each other on the internet. *HTTP* is [just one of many protocols](https://en.wikipedia.org/wiki/Internet_protocol_suite) we use in terms of communication as it relates to the internet.
* Protocol - An agreed upon (set of) procedure(s) for communication.
* Client - Sends a Request
* Server - Fulfills the Request (if possible), returns a response.

### Anatomy of an HTTP request
* Method
* URL
* Headers
* Body
* Accept-Header
* User Agent

### Anatomy of an HTTP response
* Status Codes
  * 2**: various flavors of success.
  * 3**: various flavors of redirect
  * 4**: failed to fulfill the request and its your (client's) fault.
  * 5**: failed to fulfill the request and its my (server)'s fault.
  * 1xx: need to do other things to fulfill the request I (server) am still 
  here.
  * https://www.restapitutorial.com/httpstatuscodes.html
  * https://http.cat/
* Headers
* Body
* Content Length
* Content Type

### Rack
Is a gem that allows us to configure a web server using ruby. As a server, we want to be able to listen to requests, and send responses back.