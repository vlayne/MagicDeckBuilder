CREATE TABLE LienDroitRole (
	id_droit integer NOT NULL,
    id_role integer NOT NULL,
    PRIMARY KEY (id_droit, id_role),
    FOREIGN KEY (id_droit) REFERENCES droit(id_droit),
    FOREIGN KEY (id_role) REFERENCES role(id_role) );
