/*
  substituições de operadores
*/
import { Formula } from './syntax.js';
function substituteOperators(formula, substituitionMap) {
  if (!formula.first && !formula.second) return formula;
    const first = formula.first ? substituteOperators(formula.first, substitutionMap) : null;
    const second = formula.second ? substituteOperators(formula.second, substitutionMap) : null;
  if (substitutionMap.hasOwnProperty(formula.root)) {
    const pattern = substitutionMap[formula.root];
    return pattern(first, second);
  }
  return new Formula(formula.root, first, second);
}
export { substituteOperators };
