const str = '<h2>Hello World</h2>';

function htmlspecialchars(formData) {
  return formData
    .split('')
    .map(el => {
      switch (el) {
        case '<':
          el = '&lt';
          break;
        case '>':
          el = '&gt';
          break;
        case '"':
          el = '&quot';
          break;
        case '&':
          el = '&amp';
          break;
      }
      return el;
    })
    .join('');
}

console.log(htmlspecialchars(str));
