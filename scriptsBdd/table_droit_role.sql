CREATE TABLE LienDroitRole (
	id_droit integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_droit, id_role),
    FOREIGN KEY (id_droit) REFERENCES Droit(id_droit),
    FOREIGN KEY (id_role) REFERENCES Role(id_role) );
