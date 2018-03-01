module.exports = function solveEquation(equation) {
    let roots = [];
    const Arr = equation.split(' ').join('').replace('*x^2', ' ').replace('*x', ' ').split(' ');
    const a = +Arr[0];
    const b = +Arr[1];
    const c = +Arr[2];
    const d = Math.pow(b, 2) - 4 * a * c;
    roots[0] = Math.round((-b + Math.sqrt(d)) / (2 * a));
    roots[1] = Math.round((-b - Math.sqrt(d)) / (2 * a));
     function compareNumeric(a, b) {
         return a - b;
     }
     return roots.sort(compareNumeric);
}


