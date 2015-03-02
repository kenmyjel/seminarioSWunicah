use nw201501;
var hwDataExists = db.hwdata.count();
if(!hwDataExists){
  var doc = {"player":"player1",
             "type":"gamer",
             "avatar":"default",
             "species":"sorcerer",
             "systemroles":["player","moderator","admin"],
             "vitals":{
               "life":100,
               "strength":100,
               "agility":100,
               "endurance":100,
               "magic":100,
               "wisdom":100,
               "adrenaline":100,
               "painawareness":0
             },
             "gadgets":[
                {"gadget":"sword",
                 "attackpower":10,
                 "defensepower":3,
                 "magic":0,
                 "speed":5,
                 "mixeditems":[]
                },
                {"gadget":"shield",
                 "attackpower":3,
                 "defensepower":25,
                 "magic":10,
                 "speed":-2,
                 "mixeditems":["steel recover"]
                }
              ],
              "items":[
                {"item":"steel recover",
                 "attackpower":0,
                 "defensepower":10,
                 "magic":0,
                 "speed":0,
                 "used":["shield"]
                }
              ],
              "history":[
                {"date":new Date(),
                 "type":"item added",
                 "description":"Steel Recover Added y Boss 3 Dungeon"}
              ],
              "guilds":["Fairy Tail","Shadow Fists"],
              "allies":["Player 2","Player 5"],
              "redplayer":false,
              "banned":false,
              "lastlogon":new Date(),
              "currentLocation":"Central City",
              "locations":["Central City","Boss Dungeon 1","Boss Dungeon 2","Elder Store"]
            };
    db.hwdata.insert(doc);
}
var proy = {"player":1,"species":1,"gadgets":1,"vitals":1};
db.hwdata.find({"player":"player1"}, proy).pretty();



//Tarea:
//1) usando la función $inc aumentar vitals.strength 20 puntos mas
db.hwdata.update({"player":"player1"},{ $inc: { "vitals.strength": 20 }})
db.hwdata.find({"player":"player1"}).pretty();

//2) usando la función $push agregar a guilds el valor "Konoha Sannins"
db.hwdata.update({"player":"player1"},{ $push: {"guilds":"Konoha Sannins"}})
db.hwdata.find({"player":"player1"}).pretty();

//3) usando la funcion $set agregue el atributo revival con valor 200
db.hwdata.update({"player":"player1"},{ $set: {"revival":200}})
db.hwdata.find({"player":"player1"}).pretty();

//4) usando la funcion $currentDate actualizar lastlogon
db.hwdata.update({"player":"player1"},{ $currentDate: {"lastlogon":true}})
db.hwdata.find({"player":"player1"}).pretty();

//5) actualice steel recover en items.magic  a 20 y aumente los 20 al defense del
//  gadget shield
db.hwdata.update({"player":"player1"},{$inc:{"items.0.magic": 20 },{"gadgets.1.defensepower":20}})
db.hwdata.find({"player":"player1"}).pretty();
