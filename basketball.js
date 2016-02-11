// basketball.js
/*
Radhika Mattoo, rm3485@nyu.edu
Applied Internet Tech Spring 2016
Homework 2
*/

var responseBody = '{"id":"0021500750","date":"20160205","arena":"Philips Arena","city":"Atlanta","state":"GA","next":"http://foureyes.github.io/csci-ua.0480-spring2016-010/homework/02/0021500751.json","players":[{"first_name":"Paul","last_name":"George","jersey_number":"13","person_id":"202331","position_short":"F","position_full":"Forward","minutes":"37","seconds":"37","field_goals_made":"11","field_goals_attempted":"21","player_code":"paul_george","free_throws_made":"2","free_throws_attempted":"2","three_pointers_made":"7","three_pointers_attempted":"12","rebounds_offensive":"2","rebounds_defensive":"7","assists":"6","fouls":"3","steals":"0","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"F","team_name":"Pacers"},{"first_name":"Myles","last_name":"Turner","jersey_number":"33","person_id":"1626167","position_short":"F-C","position_full":"Forward-Center","minutes":"22","seconds":"57","field_goals_made":"6","field_goals_attempted":"11","player_code":"myles_turner","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"4","rebounds_defensive":"3","assists":"0","fouls":"4","steals":"1","turnovers":"1","team_turnovers":"","blocks":"1","starting_position":"F","team_name":"Pacers"},{"first_name":"Jordan","last_name":"Hill","jersey_number":"27","person_id":"201941","position_short":"C","position_full":"Center","minutes":"28","seconds":"16","field_goals_made":"1","field_goals_attempted":"5","player_code":"jordan_hill","free_throws_made":"1","free_throws_attempted":"2","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"3","rebounds_defensive":"5","assists":"3","fouls":"2","steals":"1","turnovers":"5","team_turnovers":"","blocks":"0","starting_position":"C","team_name":"Pacers"},{"first_name":"Monta","last_name":"Ellis","jersey_number":"11","person_id":"101145","position_short":"G","position_full":"Guard","minutes":"34","seconds":"33","field_goals_made":"4","field_goals_attempted":"13","player_code":"monta_ellis","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"3","three_pointers_attempted":"7","rebounds_offensive":"0","rebounds_defensive":"3","assists":"1","fouls":"2","steals":"3","turnovers":"4","team_turnovers":"","blocks":"1","starting_position":"G","team_name":"Pacers"},{"first_name":"George","last_name":"Hill","jersey_number":"3","person_id":"201588","position_short":"G","position_full":"Guard","minutes":"35","seconds":"10","field_goals_made":"3","field_goals_attempted":"8","player_code":"george_hill","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"1","rebounds_defensive":"2","assists":"8","fouls":"3","steals":"0","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Pacers"},{"first_name":"Lavoy","last_name":"Allen","jersey_number":"5","person_id":"202730","position_short":"F-C","position_full":"Forward-Center","minutes":"30","seconds":"1","field_goals_made":"6","field_goals_attempted":"10","player_code":"lavoy_allen","free_throws_made":"1","free_throws_attempted":"1","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"6","rebounds_defensive":"8","assists":"2","fouls":"2","steals":"0","turnovers":"3","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Pacers"},{"first_name":"Joe","last_name":"Young","jersey_number":"1","person_id":"1626202","position_short":"G","position_full":"Guard","minutes":"7","seconds":"43","field_goals_made":"0","field_goals_attempted":"2","player_code":"joe_young","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"1","rebounds_offensive":"0","rebounds_defensive":"1","assists":"2","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"Solomon","last_name":"Hill","jersey_number":"44","person_id":"203524","position_short":"F","position_full":"Forward","minutes":"14","seconds":"46","field_goals_made":"1","field_goals_attempted":"7","player_code":"solomon_hill","free_throws_made":"2","free_throws_attempted":"2","three_pointers_made":"0","three_pointers_attempted":"3","rebounds_offensive":"2","rebounds_defensive":"0","assists":"0","fouls":"2","steals":"1","turnovers":"1","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"C.J.","last_name":"Miles","jersey_number":"0","person_id":"101139","position_short":"F-G","position_full":"Forward-Guard","minutes":"18","seconds":"34","field_goals_made":"5","field_goals_attempted":"12","player_code":"cj_miles","free_throws_made":"1","free_throws_attempted":"2","three_pointers_made":"2","three_pointers_attempted":"6","rebounds_offensive":"0","rebounds_defensive":"4","assists":"1","fouls":"0","steals":"0","turnovers":"3","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Pacers"},{"first_name":"Glenn","last_name":"Robinson","jersey_number":"40","person_id":"203922","position_short":"G-F","position_full":"Guard-Forward","minutes":"10","seconds":"23","field_goals_made":"1","field_goals_attempted":"2","player_code":"glenn_robinson_iii","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"1","rebounds_defensive":"1","assists":"0","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Pacers"},{"first_name":"Kent","last_name":"Bazemore","jersey_number":"24","person_id":"203145","position_short":"F-G","position_full":"Forward-Guard","minutes":"32","seconds":"4","field_goals_made":"5","field_goals_attempted":"11","player_code":"kent_bazemore","free_throws_made":"3","free_throws_attempted":"4","three_pointers_made":"2","three_pointers_attempted":"5","rebounds_offensive":"0","rebounds_defensive":"1","assists":"8","fouls":"3","steals":"3","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"F","team_name":"Hawks"},{"first_name":"Paul","last_name":"Millsap","jersey_number":"4","person_id":"200794","position_short":"F","position_full":"Forward","minutes":"33","seconds":"1","field_goals_made":"10","field_goals_attempted":"14","player_code":"paul_millsap","free_throws_made":"1","free_throws_attempted":"5","three_pointers_made":"3","three_pointers_attempted":"6","rebounds_offensive":"1","rebounds_defensive":"1","assists":"0","fouls":"1","steals":"2","turnovers":"2","team_turnovers":"","blocks":"4","starting_position":"F","team_name":"Hawks"},{"first_name":"Al","last_name":"Horford","jersey_number":"15","person_id":"201143","position_short":"C-F","position_full":"Center-Forward","minutes":"34","seconds":"13","field_goals_made":"8","field_goals_attempted":"16","player_code":"al_horford","free_throws_made":"4","free_throws_attempted":"4","three_pointers_made":"1","three_pointers_attempted":"4","rebounds_offensive":"0","rebounds_defensive":"7","assists":"6","fouls":"1","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"C","team_name":"Hawks"},{"first_name":"Kyle","last_name":"Korver","jersey_number":"26","person_id":"2594","position_short":"G","position_full":"Guard","minutes":"27","seconds":"5","field_goals_made":"2","field_goals_attempted":"7","player_code":"kyle_korver","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"2","three_pointers_attempted":"6","rebounds_offensive":"0","rebounds_defensive":"5","assists":"1","fouls":"5","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Hawks"},{"first_name":"Jeff","last_name":"Teague","jersey_number":"0","person_id":"201952","position_short":"G","position_full":"Guard","minutes":"30","seconds":"11","field_goals_made":"5","field_goals_attempted":"9","player_code":"jeff_teague","free_throws_made":"6","free_throws_attempted":"7","three_pointers_made":"0","three_pointers_attempted":"2","rebounds_offensive":"1","rebounds_defensive":"4","assists":"4","fouls":"1","steals":"1","turnovers":"4","team_turnovers":"","blocks":"0","starting_position":"G","team_name":"Hawks"},{"first_name":"Mike","last_name":"Muscala","jersey_number":"31","person_id":"203488","position_short":"F-C","position_full":"Forward-Center","minutes":"12","seconds":"40","field_goals_made":"2","field_goals_attempted":"2","player_code":"mike_muscala","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"0","rebounds_defensive":"1","assists":"0","fouls":"1","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Thabo","last_name":"Sefolosha","jersey_number":"25","person_id":"200757","position_short":"F","position_full":"Forward","minutes":"23","seconds":"27","field_goals_made":"0","field_goals_attempted":"2","player_code":"thabo_sefolosha","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"1","rebounds_defensive":"4","assists":"0","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Dennis","last_name":"Schroder","jersey_number":"17","person_id":"203471","position_short":"G","position_full":"Guard","minutes":"18","seconds":"38","field_goals_made":"4","field_goals_attempted":"9","player_code":"dennis_schroder","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"0","rebounds_defensive":"2","assists":"7","fouls":"3","steals":"1","turnovers":"2","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Tim","last_name":"Hardaway Jr.","jersey_number":"10","person_id":"203501","position_short":"G","position_full":"Guard","minutes":"12","seconds":"35","field_goals_made":"1","field_goals_attempted":"3","player_code":"timothy_hardaway","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"1","three_pointers_attempted":"2","rebounds_offensive":"0","rebounds_defensive":"1","assists":"1","fouls":"0","steals":"0","turnovers":"0","team_turnovers":"","blocks":"0","starting_position":"","team_name":"Hawks"},{"first_name":"Mike","last_name":"Scott","jersey_number":"32","person_id":"203118","position_short":"F","position_full":"Forward","minutes":"16","seconds":"6","field_goals_made":"2","field_goals_attempted":"3","player_code":"mike_scott","free_throws_made":"0","free_throws_attempted":"0","three_pointers_made":"0","three_pointers_attempted":"0","rebounds_offensive":"0","rebounds_defensive":"3","assists":"2","fouls":"1","steals":"1","turnovers":"1","team_turnovers":"","blocks":"1","starting_position":"","team_name":"Hawks"}]}';

//this object has: id, date, arena, city, state, next, and players properties
var responseObj = JSON.parse(responseBody);
var id = responseObj.id;
var date = responseObj.date;
var arena = responseObj.arena;
var city = responseObj.city;
var state = responseObj.state;
var next = responseObj.next;
var players = responseObj.players;

//TODO: must use filter, map

//Game ID
console.log("Game ID: " + id + "\n=====");

//Final Score - USE REDUCE
var pacersScore = players.reduce(function(total, player){

  var threePointers = Number(player.three_pointers_made);
  var onePointers = Number(player.free_throws_made);
  var twoPointers = Number(player.field_goals_made) - threePointers;

  var playerScore = 3*threePointers + 2*twoPointers + onePointers;
  if(player.team_name === 'Pacers'){
      return playerScore + total;
  }else return total;
}, 0);

var hawksScore = players.reduce(function(total, player){

  var threePointers = Number(player.three_pointers_made);
  var onePointers = Number(player.free_throws_made);
  var twoPointers = Number(player.field_goals_made) - threePointers;

  var playerScore = 3*threePointers + 2*twoPointers + onePointers;
  if(player.team_name === 'Hawks'){
      return playerScore + total;
  }else return total;
}, 0);

console.log("Pacers "+ pacersScore);
console.log("Hawks "+ hawksScore);


//Player with Most Rebounds - USE FOREACH
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
console.log(" * Most rebounds: " + reboundPlayer + " with " + reboundAmount);


//Guard (G) With Highest Three Pointer Percentage USE FILTER

//Total Number of Players With at Least One Assist USE FILTER
