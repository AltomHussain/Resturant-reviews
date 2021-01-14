CREATE DATABASE pern_stack_yelp;
CREATE TABLE restaurants(
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    price_range INT NOT NULL CHECK(price_range>= 1 AND price_range <=5)
);

INSERT INTO restaurants(name, location, price_range) VALUES( 'Best dinner', 'Manchester',4);