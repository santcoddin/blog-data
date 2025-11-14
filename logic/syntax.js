/*
  syntax, estou começando a ficar com sono...
  12/11/2025
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
/*
  "class Formula": define um 'molde' para objetos tipo 'formula';
  "constructor(root, first, second)": - root: operador; - first: primeiro argumento; - second: segundo argumento;
  "toString()": traduz a fórmula;
  "new Formula('→', p, q)": cria 'se p, então q'  
*/
/*
  hoje o objetivo é um parse. ainda não entendo a definição por completo...
  13/11/2025
*/
function parseFormula(s) {
  s = s.trim();
  if (/^[a-z]$/.test(s)) {
    return new Formula(s);
  }
  if (s.startsWith("~")) {
    const inner = parseFormula(s.slice(1));
    return new Formula("~", inner);
  }
  if (s.startsWith("(") && s.endsWith(")")) {
    const inside = s.slice(1, -1);
    let depth = 0
    for (let i = 0; i < inside.length; i++) {
      const c = inside[i];
      if (c === "(") depth++;
      else if (c === ")") depth--;
      else if (depth === 0 && ("→∧∨".includes(c))) {
        const op = c;
        const left = inside.slice (0, i);
        const right = inside.slice (i + 1);
        return new Formula(op, parseFormula(left), parseFormula(right));
      }
    }
  }
  throw new Error("fórmula errada: " +s);
  /*
    "s.trim()" remove espaços desnecessários antes e depois da string.
    "if (/^[a-z]$/.test(s)) {
    return new Formula(s);
  }": teste verificacional quanto, avaliando a string desde o início '^' ao fim '$', a existência de um átomo proposicional '[a-z]', o mais básico da sintaxe lógica. 
  muito, muito deprimido para continuar. boa sorte, tom de amanhã!
  */
}
