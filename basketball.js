// basketball.js
/*
Radhika Mattoo, rm3485@nyu.edu
Applied Internet Tech Spring 2016
Homework 2
*/
require('request').debug = true
var request = require('request');
var theURL = 'http://foureyes.github.io/csci-ua.0480-spring2016-010/homework/02/0021500750.json'
var nextURL = theURL;
request(theURL, function(error, response, body){
  if (!error && response.statusCode == 200) {
      //this object has: id, date, arena, city, state, next, and players properties
      var responseObj = JSON.parse(body);
      theURL = responseObj.next;
      var id = responseObj.id;
      var players = responseObj.players;
      //-----------------------------------------------------------------------------
      //Game ID
      //-----------------------------------------------------------------------------
      console.log("Game ID: " + id + "\n=====");
      //-----------------------------------------------------------------------------
      //Final Score - USE REDUCE
      //-----------------------------------------------------------------------------
      var pacersScore = players.reduce(function(total, player){
        if(player.team_name === 'Pacers'){
          var threePointers = Number(player.three_pointers_made);
          var onePointers = Number(player.free_throws_made);
          var twoPointers = Number(player.field_goals_made) - threePointers;

          var playerScore = 3*threePointers + 2*twoPointers + onePointers;

          return playerScore + total;

        }else return total;
      }, 0);

      var hawksScore = players.reduce(function(total, player){
      if(player.team_name === 'Hawks'){
        var threePointers = Number(player.three_pointers_made);
        var onePointers = Number(player.free_throws_made);
        var twoPointers = Number(player.field_goals_made) - threePointers;

        var playerScore = 3*threePointers + 2*twoPointers + onePointers;

        return playerScore + total;

        }else return total;
      }, 0);

      console.log("Pacers "+ pacersScore);
      console.log("Hawks "+ hawksScore);

      //-----------------------------------------------------------------------------
      //Player with Most Rebounds - USE FOREACH
      //-----------------------------------------------------------------------------
      var reboundAmount = Number.NEGATIVE_INFINITY;
      var reboundPlayer = null;
      players.forEach(function(player){
        var defensive = Number(player.rebounds_defensive);
        var offensive = Number(player.rebounds_offensive);
        var total = defensive + offensive;
        if(total  > reboundAmount){
          reboundAmount = total;
          reboundPlayer = player.first_name + " " + player.last_name;
        }
      });

      console.log("* Most rebounds: " + reboundPlayer + " with " + reboundAmount);
      //-----------------------------------------------------------------------------
      //Guard (G) With Highest Three Pointer Percentage
      //-----------------------------------------------------------------------------
      var highestPercentage = 0;
      var highestThreePointPercentage = players.map(function(player){
          if(player.position_short !== 'G') return null;
          if(player.three_pointers_attempted === 0) return null;
          var percentage = player.three_pointers_made/player.three_pointers_attempted;
          if(percentage > highestPercentage){
            highestPercentage = percentage;
            return player;
          }
      });

      highestThreePointPercentage = highestThreePointPercentage.reduce(function(finalPlayer, player){
        if(player == null || player == undefined) return finalPlayer;
        if(finalPlayer == null || finalPlayer == undefined) return player;
        var percentage = player.three_pointers_made/player.three_pointers_attempted;
        var prevPercentage = finalPlayer.three_pointers_made/finalPlayer.three_pointers_attempted;
        if(percentage > prevPercentage) return player;
        else return finalPlayer;
      }, highestThreePointPercentage[0]);
      var percentage = (highestThreePointPercentage.three_pointers_made/highestThreePointPercentage.three_pointers_attempted)*100;
      console.log("* Guard (G) with highest 3 point percentage: " + highestThreePointPercentage.first_name + " " + highestThreePointPercentage.last_name + " at " + percentage + " % (" + highestThreePointPercentage.three_pointers_made + "/" + highestThreePointPercentage.three_pointers_attempted + ")");


      //-----------------------------------------------------------------------------
      //Total Number of Players With at Least One Assist
      //-----------------------------------------------------------------------------
      var totalPlayers = 0;
      players.forEach(function(player){
        if(player.assists >= 1) totalPlayers++;
      });
      console.log("* There were " + totalPlayers + " players that had at least one assist");
      //-----------------------------------------------------------------------------
      //Team That Attempted the Most Free Throws
      //-----------------------------------------------------------------------------
      var hawksFreeThrows = 0;
      var pacersFreeThrows = 0;
      players.forEach(function(player){
        var freeThrows = Number(player.free_throws_attempted);
        if(player.team_name === 'Pacers'){
            pacersFreeThrows += freeThrows
        }else hawksFreeThrows += freeThrows;
      });
      if(hawksFreeThrows > pacersFreeThrows){
        console.log("* Hawks atempted the most free throws... Pacers:" + pacersFreeThrows + " Hawks: " + hawksFreeThrows);
      }else{
        console.log("* Pacers atempted the most free throws... Hawks: " + hawksFreeThrows + " Pacers: " + pacersFreeThrows);
      }

      //-----------------------------------------------------------------------------
      //Players With More Turnovers Than Assists
      //-----------------------------------------------------------------------------
      var pacersTurnover = players.filter(function(player){
        if(player.team_name !== 'Pacers') return false;
        if(player.turnovers > player.assists) return true;
        else return false;
      });
      console.log("* Pacers players with more turnovers than assists:");
      for(var i = 0; i < pacersTurnover.length; i++){
        var player = pacersTurnover[i];
        console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers);
      }
      var hawksTurnover = players.filter(function(player){
        if(player.team_name !== 'Hawks') return false;
        if(player.turnovers > player.assists) return true;
        else return false;
      });

      console.log("* Hawks players with more turnovers than assists:");
      for(var i = 0; i < hawksTurnover.length; i++){
        var player = hawksTurnover[i];
        console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers);
      }
      //-----------------------------------------------------------------------------
   }
})
