function Card(nom, description,manaCost,color,type,rareté,extension,imageUrl) {       // Accept name and age in the constructor
    this.description = description || null;
    this.manaCost  = manaCost  || null;
    this.color = color || null;
    this.nom = nom || null;
    this.type = type || null;
    this.rareté = rareté || null;
    this.extension = extension || null;
    this.imageUrl = imageUrl || null;
}

module.exports = Card;