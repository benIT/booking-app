## Booking app

## Purpose

This is a POC whose aim is to give a generic basic booking system in one day of work with symfony 5.


## Usage

    git clone https://github.com/benIT/booking-app
    cd booking-app
    docker-compose up -d
    docker exec booking-app_web_1 bash install.sh
    firefox http://localhost:8080/


## Credentials

    admin@mail.com/admin
    user1@mail.com/123
    user2@mail.com/123
    ...
    
## working features

* create a service
* create a slot
* login/register/logout
* book a slot
* cancel booking

## to do 

* send email with password or a link when user account is created
* enhance style
* refine constraints form
* LDAP connection ?