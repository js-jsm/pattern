/* 예제 1-3 ~ 1-4 */

const rj3 = {}
rj3.svg = {}

rj3.svg.line = function(){
  let getX = point => point[0],
      getY = point => point[1];
  const interpolate = points => points.join('L');

  const line = data => {
    const segments = [], points = [];
    let i = -1, n = data.length, d;
    const segment = ()=>{ segments.push('M', interpolate(points)); };

    while(++i < n) {
      d = data[i];
      points.push([ +getX.call(this, d, i), +getY.call(this, d, i)]);
    } // points = [[10, 130] L [100, 60] L [190, 160] L [280, 10]]

    if(points.length) segment();
    // segments = ['M', '10,130L100,60L190,160L280,10']

    return segments.length ? segments.join('') : null;
    // 'M10,130L100,60L190,160L280,10'
  };

  line.x = ...arg => {
    if(!arg.length) return getX;
    getX = arg[0];
    return line;
  };

  line.y = ...arg => {
    if(!arg.length) return getY;
    getY = arg[0];
    return line;
  };

  return line;
}

const objectData = [
  {pointX: 10, pointY: 130},
  {pointX: 100, pointY: 60},
  {pointX: 190, pointY: 160},
  {pointX: 280, pointY: 10}
];
const lineGenerator = rj3.svg.line().x(point => point.pointX).y(point => point.pointY);
const path = lineGenerator(objectData);


/* 예제 1-5 */
rj3.svg.samples = {};
rj3.svg.samples.functionBasedLine = function() {

}
