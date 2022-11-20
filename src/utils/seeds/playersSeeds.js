const { mongoose } = require("mongoose");
const Player = require("../../api/players/players.model");

DB_URL =
  "mongodb+srv://root:root@cluster0.aojqb2p.mongodb.net/Argentina?retryWrites=true&w=majority";

const players = [
  {
    name: "Emiliano Martinez",
    img: "https://pbs.twimg.com/media/E4vI45-XoAgFKVS.jpg",
    team: "Aston Vila",
    age: 30,
    dorsal: 23,
    position: "Portero",
  },
  {
    name: "Geronimo Rulli",
    img: "https://pbs.twimg.com/media/FPD8G6KXEAAjIyP.jpg",
    team: "Villarreal",
    age: 30,
    dorsal: 12,
    position: "Portero",
  },
  {
    name: "Franco Armani",
    img: "https://www.elfutbolero.com.ar/__export/1623087536169/sites/elfutboleromx/img/2021/06/07/armani_argentina.jpg_576046135.jpg",
    team: "River Plate",
    age: 36,
    dorsal: 1,
    position: "Portero",
  },
  {
    name: "Juan Foyth",
    img: "https://media.gettyimages.com/id/1321590058/es/foto/juan-foyth-of-argentina-during-a-match-between-argentina-and-chile-as-part-of-south-american.jpg?s=612x612&w=gi&k=20&c=mXufpXmbOOC9Jwm1of7_qdszar8SnemuUPOX8vtUMfw=",
    team: "Villarreal",
    age: 29,
    dorsal: 3,
    position: "Defensa",
  },

  {
    name: "Nicolas Tagliafico",
    img: "https://media.tycsports.com/files/2022/09/26/484051/nicolas-tagliafico_267x356.webp?v=1",
    team: "Olympic Lyon",
    age: 30,
    dorsal: 3,
    position: "Defensa",
  },
  {
    name: "Gonzalo Montiel",
    img: "https://bolavip.com/export/sites/lpm/img/2021/06/14/montiel_1.jpg_88783060.jpg",
    team: "Sevilla",
    age: 25,
    dorsal: 4,
    position: "Defensas",
  },
  {
    name: "German Pezella",
    img: "https://www2.pictures.zimbio.com/gi/Argentina+v+Ecuador+Quarterfinal+Copa+America+Oc728mGCWqLx.jpg",
    team: "Real Betis",
    age: 31,
    dorsal: 6,
    position: "Defensa",
  },
  {
    name: "Marcos Acuña",
    img: "https://media.tycsports.com/files/2022/11/01/500254/marcos-acuna-seleccion-argentina_w416.webp",
    team: "Sevilla",
    age: 31,
    dorsal: 8,
    position: "Defensa",
  },
  {
    name: "Cristian Romero",
    img: "https://media.tycsports.com/files/2022/06/02/436067/cristian-romero-seleccion-argentina_w416.webp",
    team: "Totenham Spurs",
    age: 24,
    dorsal: 13,
    position: "Defensa",
  },
  {
    name: "Lisandro Martinez",
    img: "https://media.tycsports.com/files/2022/02/03/386200/lisandro-martinez-seleccion-argentina_w416.jpg",
    team: "Manchester United",
    age: 24,
    dorsal: 25,
    position: "Defensa",
  },
  {
    name: "Nicolas Otamendi",
    img: "https://media.tycsports.com/files/2022/09/26/484043/nicolas-otamendi_267x356.webp?v=1",
    team: "Benfica",
    age: 34,
    dorsal: 19,
    position: "Defensa",
  },
  {
    name: "Nahuel Molina",
    img: "https://pbs.twimg.com/media/E4c92LSXMAAdfm5.jpg:large",
    team: "Atletico de Madrid",
    age: 24,
    dorsal: 26,
    position: "Defensa",
  },

  {
    name: "Leandro Paredes",
    img: "https://pbs.twimg.com/media/D-9kjp_WwAMfDBS.jpg",
    team: "Juventus",
    age: 28,
    dorsal: 5,
    position: "Mediocentro",
  },
  {
    name: "Rodrigo de Paul",
    img: "https://media.tycsports.com/files/2019/07/05/61028/rodrigo-de-paul.jpg",
    team: "Atletico de Madrid",
    age: 28,
    dorsal: 7,
    position: "Mediocentro",
  },
  {
    name: "Exequiel Palacios",
    img: "https://media.tycsports.com/files/2022/11/07/502262/exequiel-palacios-seleccion-argentina_416x555.webp",
    team: "Bayern 04 Leverkusen",
    age: 24,
    dorsal: 14,
    position: "Mediocentro",
  },
  {
    name: "Alexis Mac Allister",
    img: "https://bolavip.com/export/sites/bolavip/img/2022/01/19/gettyimages-1273686460.jpg_890399288.jpg",
    team: "Brighton",
    age: 23,
    dorsal: 20,
    position: "Mediocentro",
  },
  {
    name: "Guido Rodriguez",
    img: "https://es.coachesvoice.com/wp-content/uploads/2022/06/guido_mobile.jpg",
    team: "Real Betis",
    age: 28,
    dorsal: 18,
    position: "Mediocentro",
  },
  {
    name: "Alejandro Gómez 'Papu'",
    img: "https://tntsports.com.ar/__export/1653872455196/sites/tntsports/img/2022/02/18/papu-gomez-en-la-selecciona-argentina.png_480736389.png",
    team: "Sevilla",
    age: 34,
    dorsal: 17,
    position: "Mediocentro",
  },
  {
    name: "Enzo Fernandez",
    img: "https://pxb.cdn.diariohuarpe.com/huarpe/092022/1662076954669/palacios-jpg..jpg",
    team: "Benfica",
    age: 21,
    dorsal: 24,
    position: "Mediocentro",
  },
  {
    name: "Julian Alvarez",
    img: "https://tntsports.com.ar/__export/1649256593995/sites/tntsports/img/2022/03/29/julixn_festejo_seleccixn.jpg_630261857.jpg",
    team: "Manchester City",
    age: 22,
    dorsal: 9,
    position: "Delantero",
  },
  {
    name: "Lionel Messi",
    img: "https://i.pinimg.com/736x/eb/68/63/eb6863f5ef306dd70ecf5736d975461e.jpg",
    team: "Paris Saint Germain",
    age: 35,
    dorsal: 10,
    position: "Delantero",
  },

  {
    name: "Angel Di Maria",
    img: "https://depor.com/resizer/ZbqlhbdYyCJT9_DOqr8SewxQFqc=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3HYMBF7VDFB3HBRMBXXY5WI4HU.JPG",
    team: "Juventus",
    age: 34,
    dorsal: 11,
    position: "Delantero",
  },
  {
    name: "Joaquin Correa",
    img: "https://pbs.twimg.com/media/E-Uv5P5XsAUYfaE?format=jpg&name=4096x4096",
    team: "Inter",
    age: 28,
    dorsal: 16,
    position: "Delantero",
  },
  {
    name: "Paulo Dybala",
    img: "https://pbs.twimg.com/media/E9exMFuXEAkVklC.jpg",
    team: "Roma",
    age: 29,
    dorsal: 21,
    position: "Delantero",
  },
  {
    name: "Lautaro Martinez",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lautaro_Mart%C3%ADnez_%28cropped%29.jpg",
    team: "Inter",
    age: 25,
    dorsal: 22,
    position: "Delantero",
  },
  {
    name: "Angel Correa",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lautaro_Mart%C3%ADnez_%28cropped%29.jpg",
    team: "Atletico de Madrid",
    age: 27,
    dorsal: 25,
    position: "Delantero",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allPlayers = await Player.find().lean();

    if (!allPlayers.length) {
      console.log("[seed]: No se encuentran jugadores, continuo...");
    } else {
      console.log(`[seed]: Encontrados ${allPlayers.length} jugadores.`);
      await Player.collection.drop();
      console.log("[seed]: Colección Players eliminada correctamente");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error eliminando la colección -->", error)
  )
  .then(async () => {
    await Player.insertMany(players);
    console.log(
      `[seed]: ${players.length} nuevos jugadores añadidos con éxito`
    );
  })
  .catch((error) => console.log("[seed]: Error añadiendo los jugadores", error))
  .finally(() => mongoose.disconnect());
