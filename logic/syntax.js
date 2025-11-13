/*
  syntax, estou começando a ficar com sono...
  - root: operador ou predicado
  - first: primeiro argumento
  - second: segundo argumento
*/
class Formula {
  constructor(root, first = null, second = null) {
    this.root = root;
    this.first = first;
    this.second= second;
  }
toString() {
  if (!this.first && !this.second) return this.root;
  if (this.first && !this.second) return `(${this.root}${this.first})`;
  return `(${this.first}${this.root}${this.second})`;
  }
}
const p = new Formula('p');
const q = new Formula('q');
const imp = new Formula('→', p, q);
console.log(imp.toString());
