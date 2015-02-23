// mongo < scriptName.js

use sw201501;
show collections;
//var doc = {"otherAttri":"Some other value"};
//db.testSimple.insert(doc);
//db.testSimple.findOne();

//Revisando Esquema de Base de Datos
checkSchema = function(){
  var collUsuariosExists = db.usuarios.count();
  var collAulasExists = db.aulas.count();
  if(!collUsuariosExists){
    var firstUser = {"username":"administrator",
                     "pswd":"whenthecatsgooutthemicepartyallnight",
                     "name":"Administrador del Sitio",
                     "fchIng": new Date(),
                     "roles":["admin","all"]
                   },
        secondUser = {"username":"guest",
                         "pswd":"bibidibabidiboo",
                         "name":"Guest User",
                         "fchIng": new Date(),
                         "roles":["all"]
                       };
        db.usuarios.insert(firstUser);
        db.usuarios.insert(secondUser);
  }
  if(!collAulasExists){
    // implementar con 10 aulas.
    // del Edificio F
    for(var i =1; i<=10;i++){
      var "Aula"+i={"cod":i,
                    "Aula":"2.0"+i,
                    "Edificio":"F"
                  };
      if(i==10){
        var "Aula"+i={"cod":i,
                      "Aula":"2."+i,
                      "Edificio":"F"
                    };
      }
      db.usuarios.insert("Aula"+i);
    }

    var Aula1={"cod":1,
                "Aula":"2.01",
                "Edificio":"F"
                };
        Aula2={"cod":2,
                "Aula":"2.02",
                "Edificio":"F"
                };
        Aula3={"cod":3,
                "Aula":"2.03",
                "Edificio":"F"
              };
        Aula4={"cod":4,
               "Aula":"2.04",
               "Edificio":"F"
              };
        Aula5={"cod":5,
               "Aula":"2.05",
               "Edificio":"F"
              };
        Aula6={"cod":6,
               "Aula":"2.06",
               "Edificio":"F"
              };
        Aula7={"cod":7,
               "Aula":"2.07",
               "Edificio":"F"
              };
        Aula8={"cod":8,
               "Aula":"2.08",
               "Edificio":"F"
              };
        Aula9={"cod":9,
               "Aula":"2.09",
               "Edificio":"F"
              };
        Aula10={"cod":10,
               "Aula":"2.10",
               "Edificio":"F"
              };

        db.usuarios.insert(Aula1);
        db.usuarios.insert(Aula2);
        db.usuarios.insert(Aula3);
        db.usuarios.insert(Aula4);
        db.usuarios.insert(Aula5);
        db.usuarios.insert(Aula6);
        db.usuarios.insert(Aula7);
        db.usuarios.insert(Aula8);
        db.usuarios.insert(Aula9);
        db.usuarios.insert(Aula10);

  }
}


checkSchema();
db.usuarios.find().pretty();
db.aulas.find().pretty();
