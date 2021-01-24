CREATE DATABASE pern_stack_yelp;
CREATE TABLE restaurants(
    id serial primary key,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    price_range INT NOT NULL CHECK(price_range>= 1 AND price_range <=5)
);

CREATE TABLE reviews (
id serial NOT Null primary key ,
restaurant_id INT NOT null REFERENCES restaurants(id),
name VARCHAR(50) NOT NULL,
review Text NOT null,
rating INT NOT null CHECK(rating>= 1 and rating<=5)
);

INSERT INTO restaurants(name, location, price_range) VALUES( 'Best dinner', 'Manchester',4);


INSERT INTO reviews(name, restaurant_id, review, rating) VALUES('Altom',4, 'nice', 3);