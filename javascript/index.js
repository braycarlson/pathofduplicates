/* A function to replace a class */

function replaceClass(element, oldstyle, newstyle) {
  if (element.classList.contains(oldstyle)) {
    element.classList.remove(oldstyle);
    element.classList.add(newstyle);
  }
  else {
    element.classList.add(newstyle);
  }
}

/* A function to fade in elements */

function fadeIn(element, style) {
  element.classList.add('fadein');
  element.style.display = style;

  if ('animation' in document.documentElement.style) {
    element.addEventListener('animationend', function(event) {
      element.style.display = style;
      element.classList.remove('fadein');
    });
  }
  else {
    element.style.display = style;
    element.classList.remove('fadein');
  }
}

/* A function to fade out elements */

function fadeOut(element) {
  element.classList.add('fadeout');

  if ('animation' in document.documentElement.style) {
    element.addEventListener('animationend', function(event) {
      element.style.display = 'none';
      element.classList.remove('fadeout');
    });
  }
  else {
    element.style.display = 'none';
    element.classList.remove('fadeout');
  }
}

/* A function to remove a class from all elements */

function resetClass(element, style) {
  var elements = element.getElementsByClassName(style);

  if (elements) {
    var a;

    for (a = elements.length - 1; a >= 0; --a) {
      if (elements[a].classList.contains(style)) {
        elements[a].classList.remove(style);
      }
    }
  }
}

/* A function to check if a number is a positive integer */

function isIndex(index) {
  return /^[0-9]+$/.test(index);
}

/* A function to check if a string is a valid */

function isUsername(username) {
  return /^[a-zA-Z0-9_]+$/.test(username);
}

/* A function to check if the length of a string is a valid */

function isLength(username) {
  return username.length >= 3;
}

/* A function to check if an object is JSON */

function isJSON(object) {
  try {
    JSON.parse(object);
  } 
  catch(error) {
    return false;
  }

  return true;
}

/* A function to visually validate the username */

function validateUsername() {
  var username = document.getElementById('username');

  // Hints
  var li = document.querySelectorAll('#username-hints > li');

  if (isUsername(username.value)) {
    replaceClass(li[1], 'invalid', 'valid');
  }

  if (!isUsername(username.value) && username.value) {
    replaceClass(li[1], 'valid', 'invalid');
  }

  if (isLength(username.value)) {
    replaceClass(li[2], 'invalid', 'valid');
  }

  if (!isLength(username.value)) {
    li[2].classList.remove('valid');
    li[2].classList.remove('invalid');
  }

  if (!username.value) {
    li[1].classList.remove('valid');
    li[1].classList.remove('invalid');
    li[2].classList.remove('valid');
    li[2].classList.remove('invalid');
  }

  // Input
  if (isUsername(username.value) && isLength(username.value)) {
    replaceClass(username, 'invalid', 'valid');
  }
  else if (!isUsername(username.value) && !isLength(username.value) && username.value) {
    replaceClass(username, 'valid', 'invalid');
  }
  else if (isUsername(username.value) && !isLength(username.value) || !username.value) {
    username.classList.remove('valid');
    username.classList.remove('invalid');
  }
  else {
    replaceClass(username, 'valid', 'invalid');
  }
}

/* A function to visually validate the index */

function validateIndex() {
  var index = document.getElementById('index');
  var li = document.querySelectorAll('#index-hints > li');

  // Hints and Input
  if (isIndex(index.value)) {
    replaceClass(index, 'invalid', 'valid');
    replaceClass(li[1], 'invalid', 'valid');
  } 
  else if (!index.value) {
    index.classList.remove('valid');
    index.classList.remove('invalid');
    li[1].classList.remove('valid');
    li[1].classList.remove('invalid');
  } 
  else {
    replaceClass(index, 'valid', 'invalid');
    replaceClass(li[1], 'valid', 'invalid');
  }
}

/* A function to visually validate the league */

function validateLeague() {
  var league = document.getElementById('league');
  var li = document.querySelectorAll('#league-hints > li');

  // Hints and Input
  if (league.value) {
    replaceClass(league, 'invalid', 'valid');
    replaceClass(li[1], 'invalid', 'valid');
  } 
}

/* A function to visually validate the stashtab input */

function validateStashtab() {
  var stash = document.getElementById('stash');
  var li = document.querySelectorAll('#stashtab-hints > li');

  // Hints and Input
  if (isJSON(stash.value) && isNaN(stash.value)) {
    replaceClass(stash, 'invalid', 'valid');
    replaceClass(li[1], 'invalid', 'valid');
  } 
  else if (!stash.value) {
    stash.classList.remove('valid');
    stash.classList.remove('invalid');
    li[1].classList.remove('valid');
    li[1].classList.remove('invalid');
  } 
  else {
    replaceClass(stash, 'valid', 'invalid');
    replaceClass(li[1], 'valid', 'invalid');
  }
}

/* Create a link */

function createLink(event) {
  event.preventDefault();

  var username = document.getElementById('username');
  var index = document.getElementById('index');
  var league = document.getElementById('league');

  if (username.value && index.value && league.value) {
    if (isUsername(username.value) && isLength(username.value) && isIndex(index.value)) {
      var link = 'https://www.pathofexile.com/character-window/get-stash-items?league='+league.value+'&tabIndex='+index.value+'&accountName='+username.value;
      window.open(link);
    }
  }
}

/* Show input hints */

function showHint(element) {
  var ul = element.nextElementSibling;
  var help = ul.querySelector('li:nth-child(1)');
  var hints = ul.querySelectorAll('li:not(:nth-child(1))');
  var a, b;

  for (a = 0, b = hints.length; a < b; a++) {
    hints[a].style.display = 'list-item';
  }

  help.style.display = 'none';
}

/* Hide input hints */

function hideHint(element) {
  var ul = element.nextElementSibling;
  var help = ul.querySelector('li:nth-child(1)');
  var hints = ul.querySelectorAll('li:not(:nth-child(1))');
  var a, b;

  for (a = 0, b = hints.length; a < b; a++) {
    hints[a].style.display = 'none';
  }
  
  help.style.display = 'block';
}

/* Show the loader */

function showLoader() {
  var loader = document.getElementById('loader');
  loader.style.display = 'block';
}

/* Hide the loader */

function hideLoader() { 
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
}

/* Hide the message */

function hideMessage() {
  var message = document.getElementById('message');
  message.style.display = 'none';
}

 /* A function that will replace the message on submit */

function clearMessage() {
  var message = document.getElementById('message').innerHTML = '';
}

/* A function that will replace the items on submit */

function clearItems() {
  var items = document.getElementById('items').innerHTML = '';
}

/* Create the table */

function createTable(duplicates) {
  var stashtab = document.getElementById('items');
  var table = document.createElement('table');
  var table_header = document.createElement('thead');
  var header_row = document.createElement('tr');
  var artwork_header = document.createElement('th');
  var item_header = document.createElement('th');
  var sum_header = document.createElement('th');
  var table_body = document.createElement('tbody');

  table.classList.add('duplicates');
  table.appendChild(table_header);
  table.appendChild(header_row);
  table.appendChild(artwork_header);
  table.appendChild(item_header);
  table.appendChild(sum_header);

  table_header.appendChild(header_row);
  header_row.appendChild(artwork_header);
  header_row.appendChild(item_header);
  header_row.appendChild(sum_header);

  var artwork_title = document.createTextNode('Artwork');
  var item_title = document.createTextNode('Item');
  var sum_title = document.createTextNode('Duplicates');

  artwork_header.appendChild(artwork_title);
  item_header.appendChild(item_title);
  sum_header.appendChild(sum_title);
  table.appendChild(table_body);

  // JSON object variables
  var item;
  var img;
  var src;
  var sum;

  // For-loop variables
  var a, b;
  var keys;

  for (a = 0, b = duplicates.length; a < b; a++) {
    for (keys in duplicates[a]) {
      if (duplicates[a].hasOwnProperty(keys)) {
        item = document.createTextNode(keys);
      }

      sum = document.createTextNode(duplicates[a][keys][0]);
      src = duplicates[a][keys][1];

      img = document.createElement('img');
      img.src = src;
      img.alt = keys;
      img.height = 36;
      img.width = 36;

      var row = document.createElement('tr');
      var artwork_cell = document.createElement('td');
      var item_cell = document.createElement('td');
      var sum_cell = document.createElement('td');

      artwork_cell.appendChild(img);
      item_cell.appendChild(item);
      sum_cell.appendChild(sum);

      row.appendChild(artwork_cell);
      row.appendChild(item_cell);
      row.appendChild(sum_cell);
      table_body.appendChild(row);
    }
  }
  stashtab.appendChild(table);
  fadeIn(stashtab, 'block');
  stashtab.scrollIntoView({behavior: 'smooth'});
}

function showMessage(object) {
  var ul = document.getElementById('message');
  var li = document.createElement('li');
  var text;

  if (object.none) {
    text = document.createTextNode(object.none);
    li.classList.add('valid');
  } 
  else {
    text = document.createTextNode(object.error);
    li.classList.add('invalid');
  }

  li.appendChild(text);
  ul.appendChild(li);
  fadeIn(message, 'block');
}

/* Create the stashtab */

function createStash(event) {
  event.preventDefault();

  var stash = document.getElementById('stash').value;
  var request = new XMLHttpRequest();
  showLoader();

  request.onload = function() {
    if (request.readyState == 4 && request.status == 200) {
      if (request.responseText) {
        hideLoader();
        var object = JSON.parse(request.responseText);

        if (object.success) {
          hideMessage();
          createTable(object.success);
        }
        else {
          showMessage(object);
        }
      }
    }
  };

  request.open('POST', 'stashtab.php', true);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(stash);
}

/* Close Button EventListener */

document.getElementById('signin-button').addEventListener('click', function () {
  var signin = document.getElementById('signin');
  fadeOut(signin);
});

/* Input Hint EventListeners */

document.getElementById('url').addEventListener('focus', function(event) {
  var target = event.target || event.srcElement;

  // Remove Microsoft Edge autofill class
  if (target.classList.contains('edge-autoSuggestFieldFilled')) {
    target.classList.remove('edge-autoSuggestFieldFilled');
  }

  if (target.classList.contains('validate')) {
    showHint(target);
  }
}, true);

document.getElementById('url').addEventListener('blur', function(event) {
  var target = event.target || event.srcElement;

  if (target.classList.contains('validate')) {
    hideHint(target);
  }
}, true);

document.getElementById('stashtab').addEventListener('focus', function(event) {
  var target = event.target || event.srcElement;

  // Remove Microsoft Edge autofill class
  if (target.classList.contains('edge-autoSuggestFieldFilled')) {
    target.classList.remove('edge-autoSuggestFieldFilled');
  }

  if (target.classList.contains('validate')) {
    showHint(target);
  }
}, true);

document.getElementById('stashtab').addEventListener('blur', function(event) {
  var target = event.target || event.srcElement;

  if (target.classList.contains('validate')) {
    hideHint(target);
  }
}, true);

/* Link EventListeners */

document.getElementById('username').addEventListener('input', validateUsername);
document.getElementById('index').addEventListener('input', validateIndex);
document.getElementById('league').addEventListener('change', validateLeague);

document.getElementById('url').addEventListener('submit', createLink);
document.getElementById('url').addEventListener('reset', function(event) {
  var target = event.target || event.srcElement;
  resetClass(target, 'valid');
  resetClass(target, 'invalid');
});

/* Stashtab EventListeners */

document.getElementById('stashtab').addEventListener('input', validateStashtab);
document.getElementById('stashtab').addEventListener('submit', function(event) {
  clearMessage();
  clearItems();
  createStash(event);
});

document.getElementById('stashtab').addEventListener('reset', function(event) {
  clearMessage();
  hideMessage();
  
  var target = event.target || event.srcElement;
  resetClass(target, 'valid');
  resetClass(target, 'invalid');
});
