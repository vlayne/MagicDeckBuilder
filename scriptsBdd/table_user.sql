create table utilisateur( 
	id int NOT NULL,
    email varchar(255) NOT NULL,
    mot_de_passe varchar(255) NOT NULL,
    pseudonyme varchar(255) NOT NULL,
    nom varchar(255),
    prenom varchar(255),
    adresse text(500),
    PRIMARY KEY (id)
)