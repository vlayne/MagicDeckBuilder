drop table if exists LinkRuleRole;
drop table if exists Userdeck;
drop table if exists Rule;
drop table if exists Role;

create table Rule( 
	id_rule int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description text(500),
    PRIMARY KEY (id_rule)
);
create table Role( 
	id_role int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description text(500),
    PRIMARY KEY (id_role)
);
CREATE TABLE LinkRuleRole (
	id_rule integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_rule, id_role),
    FOREIGN KEY (id_rule) REFERENCES rule(id_rule),
    FOREIGN KEY (id_role) REFERENCES Role(id_role) );
create table User( 
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    firstname varchar(255),
    lastname varchar(255),
    adress text(500),
    role int (2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES Role(id_role)
);
create table Deck( 
	id int NOT NULL,
    id_user int,
    id_deck_variant int,
    name varchar(255) NOT NULL,
    description text,
    note int(1),
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES User(id)
);
CREATE TABLE Card (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    mana_cost VARCHAR(100),
    color VARCHAR(20),
    type VARCHAR(255),
    rarity VARCHAR(100),
    extension VARCHAR(40),
    imageUrl TEXT,
    PRIMARY KEY (id)
);
CREATE TABLE LinkDeckCard (
	id_card integer NOT NULL,
	id_deck integer NOT NULL,
    PRIMARY KEY (id_deck, id_card),
    FOREIGN KEY (id_card) REFERENCES Card(id),
    FOREIGN KEY (id_deck) REFERENCES Deck(id) );