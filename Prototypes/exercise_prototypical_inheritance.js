function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splic(this.items.indexOf(item), 1);
  }

  this.render = function() {
    let html = `<select>`;
    html += this.items
                  .map(item => `<option>${item}</option>`)
                  .join('');
    html += `</select>`;
    return html;
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  
  this.render = function() {
    return `<img src ="${this.src}"/>`
  }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


const e = new HtmlElement();
console.log(e);
e.click();
e.focus();

const s = new HtmlSelectElement([1, 2, 3]);
s.addItem(2);
console.log(s);