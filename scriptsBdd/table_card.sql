create table Card( 
	id int NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    description text,
    manaCost varchar(100),
    color varchar(20),
    type varchar(255),
    rareté varchar(100),
    set varchar(40),
    imageUrl text,
    PRIMARY KEY (id)
)