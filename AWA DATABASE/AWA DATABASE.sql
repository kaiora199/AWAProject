CREATE DATABASE IF NOT EXISTS awa;
USE AWA; 
CREATE TABLE restaurants(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE food(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(45) NOT NULL,
price DECIMAL(10),
description VARCHAR(255),
restaurants_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(restaurants_id) REFERENCES restaurants(id)
);
CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT,
user_email VARCHAR(100) NOT NULL,
user_password VARCHAR(255),
user_fullname VARCHAR(100),
username VARCHAR(45),
orders_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(orders_id) REFERENCES orders(id)
);
CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
order_number VARCHAR(45) NOT NULL,
order_name VARCHAR(45) NOT NULL,
order_price VARCHAR(45) NOT NULL,
order_quantity VARCHAR(45) NOT NULL,
order_date INT NOT NULL,
order_status VARCHAR(10) NOT NULL,
customer_name VARCHAR(45),
customer_details VARCHAR(45),
customer_email VARCHAR(100),
customer_adress VARCHAR(45),
PRIMARY KEY(id)
);
ALTER TABLE restaurants 
ADD address VARCHAR(50);
ALTER TABLE restaurants 
ADD operatingHours VARCHAR(50);
ALTER TABLE restaurants 
ADD restaurantType VARCHAR(50);
ALTER TABLE restaurants 
ADD priceLevel VARCHAR(10);

INSERT INTO restaurants (name)
VALUES ('Pizza Enrico'), ('Pizza Rutles');

INSERT INTO food(title, price, description, restaurants_id)
VALUES ('testipitsa','45','testin makuinen testipitsa','1');

SELECT * FROM food;

SELECT * FROM restaurants;


ALTER TABLE users
ALTER user_email SET DEFAULT '0';
ALTER TABLE users
ALTER user_password SET DEFAULT '0';
ALTER TABLE users
ALTER user_fullname SET DEFAULT '0';
ALTER TABLE users
ALTER username SET DEFAULT '0';
ALTER TABLE users
ALTER orders_id SET DEFAULT '0';
ALTER TABLE orders 
ALTER order_quantity SET DEFAULT '0';
ALTER TABLE orders
ALTER order_date SET DEFAULT '0';
ALTER TABLE orders 
ALTER order_status SET DEFAULT '0';
ALTER TABLE orders 
DROP COLUMN order_date;
ALTER TABLE orders
ADD COLUMN order_date VARCHAR(50);
ALTER TABLE orders 
DROP COLUMN order_status;
ALTER TABLE orders 
ADD COLUMN order_status VARCHAR(50);


INSERT INTO users (user_email)
VALUES ('Matti.meikalainen@gmail.com');

SET FOREIGN_KEY_CHECKS=0;

SELECT user_email FROM users;

INSERT INTO orders(order_number, order_name, order_price)
VALUES('23545','börsä','€€€');

SELECT * FROM orders;

INSERT INTO orders(order_number, order_name, order_price, order_quantity, order_date, order_status, customer_name, customer_email, customer_adress)
VALUES('10','pizza','10,90','2','11.21.2021','Awaiting Confirmation','Matti Meikäläinen','matti.meikäläinen@gmail.com','Kadunkatu 2');

SELECT * FROM orders;

SELECT title FROM food;
    
    
    
    
	
