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
    var skillTypes = skillType;
    $('.' + player + ' .' + card).html(`
      <div class="monster">
        <div class="head">
          <p class="lvl">${lvl}</p>
          <p class="name">${name}</p>
          <p class="energy"><input type='number' value='${energy}' min='0' max='${energy}'></p>
        </div>
        <div class="img-${monsterID}"></div>
        <div class="stat"><p>ATK</p><p>${atk}</p></div>
        <div class="stat"><p>DEF</p><p>${def}</p></div>
        <div class="stat"><p>MVT</p><p>${mvt}</p></div>
        <div class="stat"><p>POR</p><p>${por}</p></div>
        <p class="type">Type: ${type}</p>
        <div class="description">
          <p class="skill-type"></p>
          <p class="skill">${skill}</p>
          <div class="delete">X</div>
          <input type="checkbox">
        </div>
      </div>
    `);
    skillTypes.forEach(function(e){
      $('.' + player + ' .' + card + ' .monster .skill-type').append(`<div class="${e.toLowerCase()}"></div>`);
    });
  }

  // remove card
  $(document).on('click', '.delete', function(){
    var p = $(this).parent().parent().parent().html('<div class="add">+</div>');
  });

  // choice monster function
  function choiceMonster(choice) {
    // ========================================================================================================================
    // ========================================================================================================================
    // ========================================================================================================================
    // ========================================================================================================================
    // START MONSTERS LIST
    // ID, name, lvl, energy, atk, def, mvt, por, type, skillType, skill
    if (choice === 'barbare') {
      createCard(player, card, choice, 'Barbare M', 1, 5, 8, 6, 3, 1, 'Guerrier', ['Combat'], '+1 en DEF en présence de Barbare F');
    } else if (choice === 'barbareF') {
      createCard(player, card, choice, 'Barbare F', 1, 5, 7, 7, 3, 1, 'Guerrier', ['Combat'], '+1 en ATK en présence de Barbare M');
    } else if (choice === 'dwarf') {
      createCard(player, card, choice, 'Nain', 1, 5, 7, 7, 3, 1, 'Guerrier', ['Combat'], 'Ennemi des Gobelins');
    } else if (choice === 'gobelin') {
      createCard(player, card, choice, 'Gobelin', 1, 4, 8, 4, 4, 1, 'Guerrier', ['Combat', 'Piege'], 'Ennemi des Nains');
    } else if (choice === 'jumeaux') {
      createCard(player, card, choice, 'Jumeaux maléfiques', 1, 5, 6, 4, 3, 1, 'Démon', ['Rituel'], 'Créatures jumelées');
    } else if (choice === 'loup-garou') {
      createCard(player, card, choice, 'Loup-garou', 1, 5, 8, 6, 3, 1, 'Bête', ['Combat'], 'Riposte 1');
    } else if (choice === 'ogre') {
      createCard(player, card, choice, 'Ogre', 1, 6, 8, 6, 2, 1, 'Guerrier', ['Combat'], 'Ø');
    } else if (choice === 'zombie') {
      createCard(player, card, choice, 'Zombie', 1, 3, 6, 5, 2, 1, 'Zombie', ['Combat'], 'Ø');
    } else if (choice === 'pyromancien') {
      createCard(player, card, choice, 'Pyromancien', 2, 6, 9, 7, 3, 3, 'Magicien', ['Magie'], '+2 pour tout dégât de feu');
    } else if (choice === 'sorcier-foudre') {
      createCard(player, card, choice, 'Sorcier foudroyant', 2, 6, 9, 7, 3, 3, 'Magicien', ['Magie'], '+2 pour tout dégât de foudre');
    } else if (choice === 'magelame') {
      createCard(player, card, choice, 'Mage-Lame', 2, 7, 10, 8, 3, 2, 'Guerrier et Magicien', ['Magie'], 'MAG(1) : +1 ATK');
    } else if (choice === 'magicien') {
      createCard(player, card, choice, 'Magicien', 2, 7, 10, 8, 3, 2, 'Magicien', ['Magie', 'Rituel'], '-1 cout de magie (min 1)');
    } else if (choice === 'sorciere') {
      createCard(player, card, choice, 'Sorcière', 2, 7, 10, 8, 3, 2, 'Magicien', ['Magie', 'Rituel'], '-1 cout de rituel (min 1)');
    } else if (choice === 'spider') {
      createCard(player, card, choice, 'Démon-Araignée', 2, 7, 10, 8, 4, 2, 'Démon', ['Piege'], 'Riposte 2');
    } else if (choice === 'necromante') {
      createCard(player, card, choice, 'Nécromante', 3, 10, 13, 11, 4, 2, 'Magicien', ['Rituel'], '-2 cout de rituel (min 1)');
    } else if (choice === 'dragon') {
      createCard(player, card, choice, 'Dragon', 3, 9, 12, 10, 4, 3, 'Bête', ['Combat', 'Magie'], '+3 pour tout dégât de feu');
    } else if (choice === 'liche') {
      createCard(player, card, choice, 'Liche', 3, 10, 13, 11, 4, 2, 'Magicien', ['Magie', 'Rituel'], '+1 d\'énergie en début de tour');
    } else if (choice === 'sucube') {
      createCard(player, card, choice, 'Sucube', 3, 10, 13, 11, 4, 2, 'Démon', ['Rituel', 'Piege'], '+2 DEF si attaquée par un homme');
    } else if (choice === 'nymphe') {
      createCard(player, card, choice, 'Nymphe', 4, 12, 15, 13, 5, 3, 'Magicien', ['Magie', 'Rituel'], '-2 cout rituel et magie');
    } else if (choice === 'demon') {
      createCard(player, card, choice, 'Démon', 4, 13, 16, 14, 5, 2, 'Démon', ['Combat', 'Rituel'], 'Inciblable par un monstre de niv.1');
    } else {
      console.log('Pas de monstre correspondant à la section !');
    }
    // END MONSTERS LIST
    // ========================================================================================================================
    // ========================================================================================================================
    // ========================================================================================================================
    // ========================================================================================================================
    player = null;
    card = null;
    $('.modal').css({
      top: '-230px',
      transform: 'translateY(0)'
    });
  }

  // choice player and card's place
  $(document).on('click', "[class*='card-'] .add", function(){
    card = $(this).parent().attr('class');
    player = $(this).parent().parent().parent().attr('class');

    $("[class*='card-']").css('outline', '1px solid #9e9e9e');
    $('.' + player + ' .' + card).css('outline', '1px solid darkorange');

    $('.modal').css({
      top: '50%',
      transform: 'translateY(-50%)'
    });
  });

  // choice monster
  $('.modal div').click(function(){
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

  $('#desactivate').click(function(){
    $('input[type="checkbox"]').prop('checked', false);
  });
});
