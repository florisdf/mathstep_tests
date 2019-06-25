const mathsteps = require('mathsteps');

const changeDescr = {
  NO_CHANGE: 'Pas niets aan',

  // ARITHMETIC

  // e.g. 2 + 2 -> 4 or 2 * 2 -> 4
  SIMPLIFY_ARITHMETIC: 'Reken uit',

  // BASICS

  // e.g. 2/-1 -> -2
  DIVISION_BY_NEGATIVE_ONE: 'Vervang door het tegengestelde',
  // e.g. 2/1 -> 2
  DIVISION_BY_ONE: 'Schrap de deling door 1',
  // e.g. x * 0 -> 0
  MULTIPLY_BY_ZERO: 'Vervang de vermenigvuldiging door 0',
  // e.g. x * 2 -> 2x
  REARRANGE_COEFF: 'Herorden de coëfficiënten',
  // e.g. x ^ 0 -> 1
  REDUCE_EXPONENT_BY_ZERO: 'Vervang de macht door 1',
  // e.g. 0/1 -> 0
  REDUCE_ZERO_NUMERATOR: 'Vervang de breuk door 0',
  // e.g. 2 + 0 -> 2
  REMOVE_ADDING_ZERO: 'Schrap de optelling met 0',
  // e.g. x ^ 1 -> x
  REMOVE_EXPONENT_BY_ONE: 'Schrap de macht 1',
  // e.g. 1 ^ x -> 1
  REMOVE_EXPONENT_BASE_ONE: 'Schrap de exponent van 1',
  // e.g. x * -1 -> -x
  REMOVE_MULTIPLYING_BY_NEGATIVE_ONE: 'Vervang door het tegengestelde',
  // e.g. x * 1 -> x
  REMOVE_MULTIPLYING_BY_ONE: 'Schrap de vermeningvuldiging met 1',
  // e.g. 2 - - 3 -> 2 + 3
  RESOLVE_DOUBLE_MINUS: 'Vervang de twee opeenvolgende mintekens door een plus',

  // COLLECT AND COMBINE AND BREAK UP

  // e.g. 2 + x + 3 + x -> 5 + 2x
  COLLECT_AND_COMBINE_LIKE_TERMS: 'Zet termen met hetzelfde lettergedeelte samen en reken uit',
  // e.g. x + 2 + x^2 + x + 4 -> x^2 + (x + x) + (4 + 2)
  COLLECT_LIKE_TERMS: 'Zet termen met hetzelfde lettergedeelte samen',

  // MULTIPLYING CONSTANT POWERS
  // e.g. 10^2 * 10^3 -> 10^(2+3)
  COLLECT_CONSTANT_EXPONENTS: 'Zet exponenten met hetzelfde grondtal samen',

  // ADDING POLYNOMIALS

  // e.g. 2x + x -> 2x + 1x
  ADD_COEFFICIENT_OF_ONE: 'Voeg een coëfficiënt van 1 toe',
  // e.g. x^2 + x^2 -> 2x^2
  ADD_POLYNOMIAL_TERMS: 'Tel termen met hetzelfde lettergedeelte bij elkaar op',
  // e.g. 2x^2 + 3x^2 + 5x^2 -> (2+3+5)x^2
  GROUP_COEFFICIENTS: 'Groepeer coëfficiënten die bij dezelfde macht horen',
  // e.g. -x + 2x => -1*x + 2x
  UNARY_MINUS_TO_NEGATIVE_ONE: 'Maak van het minteken een vermenigvuldiging met -1',

  // MULTIPLYING POLYNOMIALS

  // e.g. x^2 * x -> x^2 * x^1
  ADD_EXPONENT_OF_ONE: 'Voeg een exponent van 1 toe',
  // e.g. x^2 * x^3 * x^1 -> x^(2 + 3 + 1)
  COLLECT_POLYNOMIAL_EXPONENTS: 'Zet de exponenten samen',
  // e.g. 2x * 3x -> (2 * 3)(x * x)
  MULTIPLY_COEFFICIENTS: 'Vermenigvuldig de coëfficiënten',
  // e.g. 2x * x -> 2x ^ 2
  MULTIPLY_POLYNOMIAL_TERMS: 'Vermenigvuldig de factoren met hetzelfde grondtal',

  // FRACTIONS

  // e.g. (x + 2)/2 -> x/2 + 2/2
  BREAK_UP_FRACTION: 'Splits de breuk',
  // e.g. -2/-3 => 2/3
  CANCEL_MINUSES: 'Schrap de mintekens',
  // e.g. 2x/2 -> x
  CANCEL_TERMS: 'Schrap de gemeenschappelijke factoren',
  // e.g. 2/6 -> 1/3
  SIMPLIFY_FRACTION: 'Vereenvoudig de breuk',
  // e.g. 2/-3 -> -2/3
  SIMPLIFY_SIGNS: 'Breng het minteken naar de teller',
  // e.g. 15/6 -> (5*3)/(2*3)
  FIND_GCD: 'Zoek de grootste gemene deler',
  // e.g. (5*3)/(2*3) -> 5/2
  CANCEL_GCD: 'Schrap de grootste gemene deler',
  // e.g. 1 2/3 -> 5/3
  CONVERT_MIXED_NUMBER_TO_IMPROPER_FRACTION: 'Zet gemengde breuk om naar één grote breuk',
  // e.g. 1 2/3 -> ((1 * 3) + 2) / 3
  IMPROPER_FRACTION_NUMERATOR: 'Breng het getal vòòr de breuk naar de teller',

  // ADDING FRACTIONS

  // e.g. 1/2 + 1/3 -> 5/6
  ADD_FRACTIONS: 'Tel de breuken op',
  // e.g. (1 + 2)/3 -> 3/3
  ADD_NUMERATORS: 'Tel de tellers op',
  // e.g. (2+1)/5
  COMBINE_NUMERATORS: 'Combineer de tellers',
  // e.g. 2/6 + 1/4 -> (2*2)/(6*2) + (1*3)/(4*3)
  COMMON_DENOMINATOR: 'Maak de breuken gelijknamig',
  // e.g. 3 + 1/2 -> 6/2 + 1/2 (for addition)
  CONVERT_INTEGER_TO_FRACTION: 'Zet het getal om naar een breuk',
  // e.g. 1.2 + 1/2 -> 1.2 + 0.5
  DIVIDE_FRACTION_FOR_ADDITION: 'Zet de breuk om naar een kommagetal om op te tellen',
  // e.g. (2*2)/(6*2) + (1*3)/(4*3) -> (2*2)/12 + (1*3)/12
  MULTIPLY_DENOMINATORS: 'Vermenigvuldig de noemers',
  // e.g. (2*2)/12 + (1*3)/12 -> 4/12 + 3/12
  MULTIPLY_NUMERATORS: 'Vermenigvuldig de tellers',

  // MULTIPLYING FRACTIONS

  // e.g. 1/2 * 2/3 -> 2/6
  MULTIPLY_FRACTIONS: 'Vermengivuldig de breuken',

  // DIVISION

  // e.g. 2/3/4 -> 2/(3*4)
  SIMPLIFY_DIVISION: 'Vereenvoudig de deling van een deling',
  // e.g. x/(2/3) -> x * 3/2
  MULTIPLY_BY_INVERSE: 'Zet de deling om naar een vermenigvuldiging met het omgekeerde',

  // DISTRIBUTION

  // e.g. 2(x + y) -> 2x + 2y
  DISTRIBUTE: 'Pas de distributiviteit toe',
  // e.g. -(2 + x) -> -2 - x
  DISTRIBUTE_NEGATIVE_ONE: 'Breng het minteken binnen de haakjes',
  // e.g. 2 * 4x + 2*5 --> 8x + 10 (as part of distribution)
  SIMPLIFY_TERMS: 'Vereenvoudig de termen',
  // e.g. (nthRoot(x, 2))^2 -> nthRoot(x, 2) * nthRoot(x, 2)
  // e.g. (2x + 3)^2 -> (2x + 3) (2x + 3)
  EXPAND_EXPONENT: 'Schrijf de macht als een vermenigvuldiging',

  // ABSOLUTE
  // e.g. |-3| -> 3
  ABSOLUTE_VALUE: 'Bereken de absolute waarde',

  // ROOTS
  // e.g. nthRoot(x ^ 2, 4) -> nthRoot(x, 2)
  CANCEL_EXPONENT: 'Schrap de exponent',
  // e.g. nthRoot(x ^ 2, 2) -> x
  CANCEL_EXPONENT_AND_ROOT: 'Schrap de exponent en de wortel',
  // e.g. nthRoot(x ^ 4, 2) -> x ^ 2
  CANCEL_ROOT: 'Schrap de wortel',
  // e.g. nthRoot(2, 2) * nthRoot(3, 2) -> nthRoot(2 * 3, 2)
  COMBINE_UNDER_ROOT: 'Zet onder dezelfde wortel',
  // e.g. 2 * 2 * 2 -> 2 ^ 3
  CONVERT_MULTIPLICATION_TO_EXPONENT: 'Zet de vermenigvuldiging om naar een macht',
  // e.g. nthRoot(2 * x) -> nthRoot(2) * nthRoot(x)
  DISTRIBUTE_NTH_ROOT: 'Splits de wortel',
  // e.g. nthRoot(4) * nthRoot(x^2) -> 2 * x
  EVALUATE_DISTRIBUTED_NTH_ROOT: 'Reken de gesplitste wortel uit',
  // e.g. 12 -> 2 * 2 * 3
  FACTOR_INTO_PRIMES: 'Ontbind in priemfactoren',
  // e.g. nthRoot(2 * 2 * 2, 2) -> nthRoot((2 * 2) * 2)
  GROUP_TERMS_BY_ROOT: 'Groepeer de termen per wortel',
  // e.g. nthRoot(4) -> 2
  NTH_ROOT_VALUE: 'Bereken de wortel',
  // e.g. nthRoot(4) + nthRoot(4) = 2*nthRoot(4)
  ADD_NTH_ROOTS: 'Tell de wortels op',
  // e.g. nthRoot(x, 2) * nthRoot(x, 2) -> nthRoot(x^2, 2)
  MULTIPLY_NTH_ROOTS: 'Vermenigvuldig de wortels',

  // SOLVING FOR A VARIABLE

  // e.g. x - 3 = 2 -> x - 3 + 3 = 2 + 3
  ADD_TO_BOTH_SIDES: 'Tel aan beide kanten hetzelfde getal op',
  // e.g. 2x = 1 -> (2x)/2 = 1/2
  DIVIDE_FROM_BOTH_SIDES: 'Deel beide kanten door hetzelfde getal',
  // e.g. (2/3)x = 1 -> (2/3)x * (3/2) = 1 * (3/2)
  MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION: 'Vermenigvuldig beide kanten met de omgekeerde breuk',
  // e.g. -x = 2 -> -1 * -x = -1 * 2
  MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE: 'Vermenigvuldig beide kanten met -1',
  // e.g. x/2 = 1 -> (x/2) * 2 = 1 * 2
  MULTIPLY_TO_BOTH_SIDES: 'Vermenigvuldig beide kanten met hetzelfde getal',
  // e.g. x + 2 - 1 = 3 -> x + 1 = 3
  SIMPLIFY_LEFT_SIDE: 'Vereenvoudig de linkerkant',
  // e.g. x = 3 - 1 -> x = 2
  SIMPLIFY_RIGHT_SIDE: 'Vereenvoudig de rechterkerkant',
  // e.g. x + 3 = 2 -> x + 3 - 3 = 2 - 3
  SUBTRACT_FROM_BOTH_SIDES: 'Trek van beide kanten hetzelfde getal af',
  // e.g. 2 = x -> x = 2
  SWAP_SIDES: 'Wissel de linker- en rechterkant om',
  // e.g. (x - 2) (x + 2) = 0 => x = [-2, 2]
  FIND_ROOTS: 'Zoek de wortels',

  // CONSTANT EQUATION

  // e.g. 2 = 2
  STATEMENT_IS_TRUE: 'Klopt',
  // e.g. 2 = 3
  STATEMENT_IS_FALSE: 'Klopt niet',

  // FACTORING

  // e.g. x^2 - 4x -> x(x - 4)
  FACTOR_SYMBOL: 'Zonder af',
  // e.g. x^2 - 4 -> (x - 2)(x + 2)
  FACTOR_DIFFERENCE_OF_SQUARES: 'Ontbind het merkwaardig product van de vorm A^2 - B^2',
  // e.g. x^2 + 2x + 1 -> (x + 1)^2
  FACTOR_PERFECT_SQUARE: 'Ontbind het merkwaardig product van de vorm A^2 + 2AB + B^2',
  // e.g. x^2 + 3x + 2 -> (x + 1)(x + 2)
  FACTOR_SUM_PRODUCT_RULE: 'Gebruik som en product om te ontbinden in factoren',
  // e.g. 2x^2 + 4x + 2 -> 2x^2 + 2x + 2x + 2
  BREAK_UP_TERM: 'Splits de term',
};

const colors = ["rgb(255, 99, 0)",
  "rgb(25, 169, 116)", "rgb(53, 126, 221)", "rgb(213, 0, 143)"]

function htmlNode(node) {
  let html;
  if (node.args && node.args.length > 0) {
    html = node.args.map(node => htmlNode(node)).join(node.op);
  } else {
    html = node.toString();
  }
  if (node.changeGroup) {
    html = `<span style="color:${colors[(node.changeGroup - 1) % colors.length]}">${html}</span>`;
  }
  return html;
}

function htmlEq(eq) {
  let html = htmlNode(eq.leftNode);
  html += eq.comparator;
  html += htmlNode(eq.rightNode);
  return html;
}

function htmlSingleStep(step) {
  let html = '<li>';
  html += changeDescr[step.changeType];

  html += '<br>';
  html += [step.oldEquation, step.newEquation].map(htmlEq).join(' <=> ');
  if(step.substeps && step.substeps.length > 0) {
    html += htmlSteps(step.substeps);
  }
  html += '</li>';
  return html
}

function htmlSteps(steps) { 
  let html = '<ul>'
  html += steps.map(htmlSingleStep).join('\n');
  html += '</ul>';
  return html;
}

const steps = mathsteps.solveEquation('-3x - 2 + x = 15 - 6x + 9x - 3');
console.log(htmlSteps(steps));
