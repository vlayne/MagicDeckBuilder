const cards = require('./resources/cards-magic.json')
const database = require('./database');

settingsDb = database.settings;

// On récupère seulement les cartes des extensions du jeu en ligne
cardsMTGA = cards.filter(x => x.set === 'grn' || x.set === 'dom' || x.set === 'xln' || x.set === 'rix' || x.set === 'm19');
let values = [];

// Conversion du fichier json bulk => "('','')" en nested array => "['','']" 
for (i=0; i<cardsMTGA.length;i++){  

    let name = cardsMTGA[i]['name'];let set = cardsMTGA[i]['set']; 
    let image = cardsMTGA[i]['image_uris'];let description = cardsMTGA[i]['oracle_text'];
    let color = cardsMTGA[i]['colors']; let mana = cardsMTGA[i]['mana_cost'];
    let type = cardsMTGA[i]['type_line']; let rarity = cardsMTGA[i]['rarity'];

    name.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    if(image){
    image['normal'].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(description){
    description.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(mana){
    mana.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    if(color && color[0]){
    color[0].replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    }
    type.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    rarity.replace(/(|)/,function(match){return (match === "(")?"[":"]"});
    set.replace(/(|)/,function(match){return (match === "(")?"[":"]"});

    values.push([null,name,description,mana,color ? color[0] : 'N',type,rarity,set,image ? image['normal'] : null]);
}

settingsDb.query("INSERT INTO card VALUES ?",[values], function(err,result) {
  if(err){
    throw err;
  } else {
    console.log('Nombre de cartes importées', result['affectedRows']);
  }
});

