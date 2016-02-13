// basketball.js
/*
Radhika Mattoo, rm3485@nyu.edu
Applied Internet Tech Spring 2016
Homework 2
*/

var request = require('request');
var theURL = 'http://foureyes.github.io/csci-ua.0480-spring2016-010/homework/02/0021500750.json';

//first call
getGames(theURL);

function getGames(theURL){
  //base case
  if(theURL == "")return;

  //recursive case
  request(theURL, function(error, response, body){
    if (!error && response.statusCode == 200) {
        //this object has: id, date, arena, city, state, next, and players properties
        var responseObj = JSON.parse(body);
        var id = responseObj.id;
        var players = responseObj.players;

        //look through players to get team names
        var teamOne = "";
        var teamTwo = "";
        for(var i = 0; i < players.length; i++){
          if(teamOne != "" && teamTwo != "") break;
          var player = players[i];
          var teamName = player.team_name;
          if(teamOne == "" && teamTwo != teamName){
            teamOne = teamName;
          }if(teamTwo == "" && teamOne != teamName){
            teamTwo = teamName;
          }
        }

        //-----------------------------------------------------------------------------
        //Game ID
        //-----------------------------------------------------------------------------
        console.log("Game ID: " + id + "\n=====");
        //-----------------------------------------------------------------------------
        //Final Score
        //-----------------------------------------------------------------------------
        var teamOneScore = players.reduce(function(total, player){
          if(player.team_name === teamOne){
            var threePointers = Number(player.three_pointers_made);
            var onePointers = Number(player.free_throws_made);
            var twoPointers = Number(player.field_goals_made) - threePointers;

            var playerScore = 3*threePointers + 2*twoPointers + onePointers;

            return playerScore + total;

          }else return total;
        }, 0);

        var teamTwoScore = players.reduce(function(total, player){
        if(player.team_name === teamTwo){
          var threePointers = Number(player.three_pointers_made);
          var onePointers = Number(player.free_throws_made);
          var twoPointers = Number(player.field_goals_made) - threePointers;

          var playerScore = 3*threePointers + 2*twoPointers + onePointers;

          return playerScore + total;

          }else return total;
        }, 0);

        console.log(teamOne + " "+ teamOneScore);
        console.log(teamTwo + " "+ teamTwoScore);

        //-----------------------------------------------------------------------------
        //Player with Most Rebounds
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
            if(player.position_short.indexOf('G') === -1) return null;
            if(player.three_pointers_attempted === 0) return null;
            var percentage = (player.three_pointers_made/player.three_pointers_attempted)*100;
            if(percentage > highestPercentage){
              highestPercentage = percentage;
              return player;
            }
        });

        highestThreePointPercentage = highestThreePointPercentage.reduce(function(finalPlayer, player){
          if(player == null) return finalPlayer;
          if(finalPlayer == null || finalPlayer == undefined) return player;
          var percentage = (player.three_pointers_made/player.three_pointers_attempted)*100;
          var prevPercentage = (finalPlayer.three_pointers_made/finalPlayer.three_pointers_attempted)*100;
          if(percentage > prevPercentage) return player;
          else return finalPlayer;
        }, highestThreePointPercentage[0]);
        var percentage = (highestThreePointPercentage.three_pointers_made/highestThreePointPercentage.three_pointers_attempted)*100;
        console.log("* Guard with highest 3 point percentage: " + highestThreePointPercentage.first_name + " " + highestThreePointPercentage.last_name + " at " + percentage + "% (" + highestThreePointPercentage.three_pointers_made + "/" + highestThreePointPercentage.three_pointers_attempted + ")");


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
        var teamOneFreeThrows = 0;
        var teamTwoFreeThrows = 0;
        players.forEach(function(player){
          var freeThrows = Number(player.free_throws_attempted);
          if(player.team_name === teamOne){
              teamOneFreeThrows += freeThrows
          }else teamTwoFreeThrows += freeThrows;
        });
        if(teamTwoFreeThrows > teamOneFreeThrows){
          console.log("* " + teamTwo + " atempted the most free throws... "+teamTwo+":" + teamTwoFreeThrows + " "+teamOne+": " + teamOneFreeThrows);
        }else{
          console.log("* " + teamOne + " atempted the most free throws... "+teamOne+": " + teamOneFreeThrows + " "+teamTwo+": " + teamTwoFreeThrows);
        }

        //-----------------------------------------------------------------------------
        //Players With More Turnovers Than Assists
        //-----------------------------------------------------------------------------
        var teamOneTurnover = players.filter(function(player){
          if(player.team_name !== teamOne) return false;
          if(player.turnovers > player.assists) return true;
          else return false;
        });
        console.log("* "+teamOne+" players with more turnovers than assists:");
        for(var i = 0; i < teamOneTurnover.length; i++){
          var player = teamOneTurnover[i];
          console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers);
        }
        var teamTwoTurnover = players.filter(function(player){
          if(player.team_name !== teamTwo) return false;
          if(player.turnovers > player.assists) return true;
          else return false;
        });

        console.log("*" +teamTwo +" players with more turnovers than assists:");
        for(var i = 0; i < teamTwoTurnover.length; i++){
          var player = teamTwoTurnover[i];
          console.log("\t* " + player.first_name + " " + player.last_name + " has an assist to turnover ratio of " + player.assists + ":" + player.turnovers);
        }
        //-----------------------------------------------------------------------------
        theURL = responseObj.next;
        getGames(theURL);
     }
  })
}
