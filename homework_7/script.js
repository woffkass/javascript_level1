var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var NEW_FOOD_TIME = 5000;
var NEW_WALL_TIME = 8000;// таймер появления стен

var isGameRunning = false;
var snakeTimer;
var snake = [];
var direction = 'x-';
var scoreNumber = 0; //счетчик очков
var wall = [];//массив стен
var wallMax = 10;//максимальное количество стен
var wallTimer;

function init() {
  var startButton = document.getElementById('snake-start');
  startButton.addEventListener('click', startGame);

  var renewButton = document.getElementById('snake-renew');
  renewButton.addEventListener('click', refreshGame);

  addEventListener('keydown', changeDirection);

  buildGameField();
}

function buildGameField() {
  var gameTable = document.createElement('table');
  gameTable.classList.add('game-table');

  for(var i = 0; i < FIELD_SIZE_X; i++) {
    var row = document.createElement('tr');
    row.classList.add('game-table-row');

    for(var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.classList.add('cell-' + i + "-" + j);

      row.appendChild(cell);
    }
    gameTable.appendChild(row);
  }

  document.getElementById('snake-field').appendChild(gameTable);
  //поле счетчика очков
  var scorePanel = document.createElement('div');
  scorePanel.classList.add('score');
  scorePanel.innerHTML = '0';
  document.getElementById('snake-field').appendChild(scorePanel);
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      if(direction != 'y+') {
        direction = 'y-';
      }
      break;
    case 38:
      if(direction != 'x+') {
        direction = 'x-';
      }
      break;
    case 39:
      if(direction != 'y-') {
        direction = 'y+';
      }
      break;
    case 40:
      if(direction != 'x-') {
        direction = 'x+';
      }
      break;

  }
}

function startGame() {
  isGameRunning = true;
  score(0);
  respawn();

  snakeTimer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, NEW_FOOD_TIME);
  wallTimer = setInterval(createWall, NEW_WALL_TIME);
}

function respawn() {
  var startCoordX = Math.floor(FIELD_SIZE_X / 2);
  var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

  var snakeHead
    = document.getElementsByClassName('cell-' + startCoordX + '-' + startCoordY)[0];
  snakeHead.classList.add('snake-unit');

  var snakeTail
    = document.getElementsByClassName('cell-' + (startCoordX - 1) + '-' + startCoordY)[0];

  snakeTail.classList.add('snake-unit');

  snake = [];

  snake.push(snakeHead);
  snake.push(snakeTail);
}

function move() {
  var snakeHeadClasses = snake[snake.length - 1].classList;

  var newUnit;
  var snakeCoords = snakeHeadClasses[1].split('-');
  var coordX = parseInt(snakeCoords[1]);
  var coordY = parseInt(snakeCoords[2]);

  switch(direction) {
    case 'x-':
      if (coordX == 0) {
        newUnit = document.getElementsByClassName('cell-19-' + coordY)[0];
      } else {
      newUnit = document.getElementsByClassName('cell-' + (coordX - 1) + '-' + coordY)[0];
      }
      break;
    case 'x+':
      if (coordX == FIELD_SIZE_X - 1) {
        newUnit = document.getElementsByClassName('cell-0-' + coordY)[0];
      } else {
      newUnit = document.getElementsByClassName('cell-' + (coordX + 1) + '-' + coordY)[0];
      }
      break;
    case 'y-':
      if (coordY == 0) {
        newUnit = document.getElementsByClassName('cell-' + coordX + '-19')[0];
      } else {
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY - 1))[0];
      }
      
      break;
    case 'y+':
      if (coordY == FIELD_SIZE_Y - 1) {
        newUnit = document.getElementsByClassName('cell-' + coordX + '-0')[0];
      } else {
      newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY + 1))[0];
      }
      break;
  }

  if(newUnit !== undefined && !newUnit.classList.contains('snake-unit')) {
    newUnit.classList.add('snake-unit');
    snake.push(newUnit);

    if(!newUnit.classList.contains('food-unit')) {
      var removed = snake.splice(0, 1)[0];
      removed.classList.remove('snake-unit');
    } else {
      newUnit.classList.remove('food-unit');
      score(1);
      createFood();
    }
    
    if(newUnit.classList.contains('wall-unit')) {
      finishGame();// если стена то конец игры
    };
    
  } else {
    finishGame();//лишнее
  }
}

function createFood() {
  var foodCreated = false;

  while(!foodCreated) {
    var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
    var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var foodCell = document.getElementsByClassName('cell-' + foodX + '-' + foodY)[0];
  
    if((!foodCell.classList.contains('snake-unit'))&&(!foodCell.classList.contains('wall-unit'))) {
      foodCell.classList.add('food-unit');
      foodCreated = true;
    }
  }
}

function createWall() {
  var wallCreated = false;
  
  if (wall.length == wallMax) {//если кол-во стен максимально
    var removed = wall.splice(0, 1)[0];
      removed.classList.remove('wall-unit');// удаляем класс с 0 элемента 
      wall.shift;// удаляем нулевой эдемент
  }
  
  while(!wallCreated) {
    var wallX = Math.floor(Math.random() * FIELD_SIZE_X);
    var wallY = Math.floor(Math.random() * FIELD_SIZE_Y);

    var wallCell = document.getElementsByClassName('cell-' + wallX + '-' + wallY)[0];

    if((!wallCell.classList.contains('snake-unit'))&&(!wallCell.classList.contains('food-unit'))) {
      wallCell.classList.add('wall-unit');
      wall.push(wallCell);//добавляем сгененрированцю стену в массив
      wallCreated = true;
    }
  }
}

function score(scoreInt) {//функция подсчета очков
  scoreNumber += scoreInt;
  var scorePanel = document.getElementsByClassName('score')[0];
  scorePanel.innerHTML = '';
  scorePanel.innerHTML = scoreNumber;
}

function finishGame() {
  clearInterval(snakeTimer);
  clearInterval(wallTimer);
  
  isGameRunning = false;

  alert('GAME OVER');
}

function refreshGame() {
  location.reload();
}

window.onload = init;
