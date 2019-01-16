CREATE TABLE LienDeckCard (
	id_card integer NOT NULL,
    id_deck integer NOT NULL,
    id_utilisateur integer NOT NULL
    PRIMARY KEY (id_utilisateur,id_deck, id_card),
    FOREIGN KEY (id_card) REFERENCES Card(id),
    FOREIGN KEY (id_utilisateur,id_deck) REFERENCES Deck(id, id_utilisateur) );