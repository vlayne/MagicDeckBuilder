CREATE DATABASE MagicDeckBuilder
CHARACTER SET utf8
COLLATE utf8_unicode_ci;
USE MagicDeckBuilder;
create table Rule( 
	id_rule int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(500),
    PRIMARY KEY (id_rule)
);
create table Role( 
	id_role int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(500),
    PRIMARY KEY (id_role)
);
CREATE TABLE LinkRuleRole (
	id_rule integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_rule, id_role),
    FOREIGN KEY (id_rule) REFERENCES Rule(id_rule),
    FOREIGN KEY (id_role) REFERENCES Role(id_role) );
create table User( 
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    firstname varchar(255),
    lastname varchar(255),
    adress varchar(1000),
    role int (2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES Role(id_role)
);
create table Deck( 
	id int NOT NULL,
    id_user int NOT NULL,
    is_variant bool DEFAULT false,
    id_ref_deck int,
    name varchar(255) NOT NULL,
    description text,
    note int(1),
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES User(id)
);
CREATE TABLE Card (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    mana_cost VARCHAR(50),
    color VARCHAR(100),
    type VARCHAR(100),
    rarity VARCHAR(50),
    extension VARCHAR(10),
    imageUrl TEXT,
    PRIMARY KEY (id)
);
CREATE TABLE LinkDeckCard (
	id_card integer NOT NULL,
	id_deck integer NOT NULL,
    PRIMARY KEY (id_deck, id_card),
    FOREIGN KEY (id_card) REFERENCES Card(id),
    FOREIGN KEY (id_deck) REFERENCES Deck(id) );