class Team {
    constructor(name, league) {
      this.name = name;
      this.league = league;
      this.players = [];
    }
    get rating() {
      return this.clacRating()
    }
    clacRating(){
      var ges = 0;
      this.players.forEach(player => {
        ges += player._rating;
      });
      return ges / this.players.length;
    }
    addPlayer(player){
      this.players.push(player);
      return true;
    }
  }

  class Player {
    constructor(name, team, rating) {
      this.name = name;
      this.team = team;
      this._rating = rating;
    }
    get rating(){
      return this._rating;
    }
  }

var a = [];
var tm1 = new Team("FC Barcelona", "LaLiga");
var tm2 = new Team("Real Madrid", "LaLiga");
var pl11 = new Player("Pedri", "FC Barcelona", 84);
tm1.addPlayer(pl11);
var pl12 = new Player("Lewandowski", "FC Barcelona", 91);
tm1.addPlayer(pl12);
var pl21 = new Player("Vinicius jr", "Real Madrid", 86);
tm2.addPlayer(pl21);
var pl22 = new Player("Benzema", "Real Madrid", 91);
tm2.addPlayer(pl22);
gamesim(tm1, tm2);

function gamesim(Home, Away){
  let goalshome = 0;
  let goalsaway = 0;
  for(let minutes = 0; minutes < 90; minutes++){
    //Laliga Durchschnittlich 2.5 Goals pro Match
    //jede Minute 0.0277777% Chanche uf Goal
    if(Math.floor(Math.random() * 10000) < 277){
      if(Math.floor(Math.random() * Home.clacRating()) > Math.floor(Math.random() * Away.clacRating())){
        goalshome++;
      } else{
        goalsaway++;
      }
    }
  }
  document.getElementById('score').innerHTML = goalshome + ":" + goalsaway;
}

