
class Team {
    constructor(name, league, imgsrc) {
      this.name = name;
      this.league = league;
      this.players = [];
      this.imgsrc = imgsrc;
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
  
  var allTeams = [];
  var PlayerTeam;
  
  
    allTeams.push(Barca = new Team("Barcelona", "LaLiga", "Bilder/Barca.png"));
    allTeams.push(RealM = new Team("Real Madrid", "LaLiga", "Bilder/Real.png"));
    allTeams.push(AtleticoM = new Team("Atletico Madrid", "Laliga", "Bilder/Atletico Madrid.png"));
    allTeams.push(Sevilla = new Team("Sevilla", "Laliga", "Bilder/Sevilla.png"));
    allTeams.push(RealS = new Team("Real Sociedad", "Laliga", "Bilder/Real Sociedad.png"));
  
  
  function CreatePlayers(){
    Barca.addPlayer(Lewa = new Player("Lewandowski", "FC Barcelona", 91));
    RealM.addPlayer(Benzema = new Player("Benzema", "Real Madrid", 91));
    AtleticoM.addPlayer(Oblak = new Player( "Obalk", "Atletico Madrid", 88))
    Sevilla.addPlayer(AndreG = new Player( "Andre Gomez", "Sevilla", 85))
    RealS.addPlayer(Oyarzabal = new Player( "Oyarzabal", "Real Sociedad", 85))
  
  }
  

  function Teamwahl(teamchoose){
    allTeams.forEach(Team => {
      if(Team.name == teamchoose.id){
         PlayerTeam = Team.name;
      }
    });
    document.getElementById("Saisonsim").innerHTML = "Saison mit " + PlayerTeam + " starten";
    console.log(PlayerTeam)
}

function gamesim(Home, Away){
  let goalshome = 0;
  let goalsaway = 0;
  console.log(Home);
  //Home.players.forEach(player => {
    //document.getElementById('Hometm').innerHTML += "<p>" + player.name + " " + player.rating+ "</p>";
  //});
  //Away.players.forEach(player => {
    //document.getElementById('Awaytm').innerHTML += "<p>" + player.name + " " + player.rating+ "</p>";
  //});
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
  console.log(goalshome +""+ goalsaway);
}

function StartSaison(){
  document.getElementsByClassName("Teamlogo").remove();
  //document.getElementsByClassName("Teamlogo").hidden = true;
  //document.getElementsByClassName("Teamlogo").style.visibility = "hidden";
  console.log("Gugu");
}
