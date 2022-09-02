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
var pl1 = new Player("Pedri", "FC Barcelona", 84);
var pl2 = new Player("Lewandowski", "FC Barcelona", 91);
tm1.addPlayer(pl1);
tm1.addPlayer(pl2);
console.log(tm1.clacRating());
