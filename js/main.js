// globale variables
var player;
var card;
var monsterID;
var p1LP = 20;
var p2LP = 20;

$(document).ready(function() {
  // LP gestion
  $('#LP1Down').click(function(){
    p1LP = parseInt(p1LP) - 1 < 0 ? 0 : parseInt(p1LP) - 1;
    $('#life-point-p1').html(p1LP);
  });
  $('#LP1Up').click(function(){
    p1LP = parseInt(p1LP) + 1;
    $('#life-point-p1').html(p1LP);
  });
  $('#LP2Down').click(function(){
    p2LP = parseInt(p2LP) - 1 < 0 ? 0 : parseInt(p2LP) - 1;
    $('#life-point-p2').html(p2LP);
  });
  $('#LP2Up').click(function(){
    p2LP = parseInt(p2LP) + 1;
    $('#life-point-p2').html(p2LP);
  });

  // create card
  function createCard(player, card, monsterID, name, lvl, energy, atk, def, mvt, por, type, skillType, skill) {
    $('.' + player + ' .' + card).html(`
      <div class="monster">
        <div class="head">
          <p class="lvl">${lvl}</p>
          <p class="name">${name}</p>
          <p class="energy">${energy}</p>
        </div>
        <div class="img-${monsterID}"></div>
        <div class="stat"><p>ATK</p><p>${atk}</p></div>
        <div class="stat"><p>DEF</p><p>${def}</p></div>
        <div class="stat"><p>MVT</p><p>${mvt}</p></div>
        <div class="stat"><p>POR</p><p>${por}</p></div>
        <p class="type">Type: ${type}</p>
        <div class="description">
          <p class="skill-type">${skillType}</p>
          <p class="skill">${skill}</p>
        </div>
      </div>
    `);
  }

  // remove card
  function removeCard(player, card) {
    $('.' + player + ' .' + card).html('');
  }

  // choice monster function
  function choiceMonster(choice) {
    if (choice === 'barbare') {
      // ID, name, lvl, energy, atk, def, mvt, por, type, skillType, skill
      createCard(player, card, choice, 'Barbare', 1, 7, 6, 4, 1, 1, 'Guerrier', ['Combat'], 'Aucun pouvoir.');
    } else if (choice === 'pyromancien') {
      // ID, name, lvl, atk, def, mvt, por, type, skillType, skill
      createCard(player, card, choice, 'Pyromancien', 1, 6, 7, 3, 1, 2, 'Magicien', ['Magie', 'Rituel'], 'Dégâts de feu (+2)');
    } else if (choice === 'empty') {
      // name, lvl, atk, def, mvt, por, type, skillType, skill
      removeCard(player, card);
    }
    player = null;
    card = null;
    $('.modal').css({
      top: '-112px',
      transform: 'translateY(0)'
    });
  }

  // choice player and card's place
  $("[class*='card-']").click(function(){
    card = $(this).attr('class');
    player = $(this).parent().parent().attr('class');

    $("[class*='card-']").css('outline', '1px solid #9e9e9e');
    $('.' + player + ' .' + card).css('outline', '1px solid darkorange');

    $('.modal').css({
      top: '50%',
      transform: 'translateY(-50%)'
    });
  });

  // choice monster
  $('.modal p').click(function(){
    if (player == null) {
      console.log('Pas de joueur sélectionné');
    }
    if (card == null) {
      console.log('Pas d\'emplacement sélectionné');
    }

    monsterID = $(this).attr('id');
    $("[class*='card-']").css('outline', '1px solid #9e9e9e');
    choiceMonster(monsterID);
  });
});
