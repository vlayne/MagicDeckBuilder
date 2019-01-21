
function User(email, mot_de_passe,pseudonyme,nom,prenom,adresse,role) {       // Accept name and age in the constructor
    this.email = email || null;
    this.mot_de_passe  = mot_de_passe  || null;
    this.pseudonyme = pseudonyme || null;
    this.nom = nom || null;
    this.prenom = prenom || null;
    this.adresse = adresse || null;
    this.role = role || null;
}