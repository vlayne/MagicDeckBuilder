create table Droit( 
	id_droit int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    description text(500),
    PRIMARY KEY (id_droit)
);
create table Role( 
	id_role int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    description text(500),
    PRIMARY KEY (id_role)
);
CREATE TABLE LienDroitRole (
	id_droit integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_droit, id_role),
    FOREIGN KEY (id_droit) REFERENCES Droit(id_droit),
    FOREIGN KEY (id_role) REFERENCES Role(id_role) );
create table User( 
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    mot_de_passe varchar(255) NOT NULL,
    pseudonyme varchar(255) NOT NULL,
    nom varchar(255),
    prenom varchar(255),
    adresse text(500),
    role int (2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES Role(id_role)
);
create table Deck( 
	id int NOT NULL AUTO_INCREMENT,
    id_utilisateur int NOT NULL,
    id_deck_variante int,
    nom varchar(255) NOT NULL,
    description text,
    note tinyint,
    PRIMARY KEY (id_utilisateur,id),
    FOREIGN KEY (id_utilisateur) REFERENCES User(id)
);
CREATE TABLE Card (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    manaCost VARCHAR(100),
    color VARCHAR(20),
    type VARCHAR(255),
    rareté VARCHAR(100),
    extension VARCHAR(40),
    imageUrl TEXT,
    PRIMARY KEY (id)
);
CREATE TABLE LienDeckCard (
	id_card integer NOT NULL,
    id_deck integer NOT NULL,
    id_utilisateur integer NOT NULL,
    PRIMARY KEY (id_utilisateur,id_deck, id_card),
    FOREIGN KEY (id_card) REFERENCES Card(id),
    FOREIGN KEY (id_utilisateur,id_deck) REFERENCES Deck(id, id_utilisateur) );