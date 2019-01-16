create table Deck( 
	id int NOT NULL AUTO_INCREMENT,
    id_utilisateur int NOT NULL,
    id_deck_variante int,
    nom varchar(255) NOT NULL,
    description text,
    note tinyint,
    PRIMARY KEY (id_utilisateur,id),
    FOREIGN KEY (id_utilisateur) REFERENCES User(id)
)