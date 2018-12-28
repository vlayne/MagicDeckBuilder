CREATE TABLE LienUtilisateurRole (
	id_utilisateur integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_utilisateur, id_role),
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(identifiant),
    FOREIGN KEY (id_role) REFERENCES role(id_role) );
