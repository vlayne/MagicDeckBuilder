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
)