let points = [[1,-3],[5,-4],[4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 4;
      }
    }
    translate(width/2, height/2);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#be660e");
      let c2 = color("#ee851b");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(4)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(630, 303);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#be660e");
      let c2 = color("#ee851b");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(5)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(620, 278);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#be660e");
      let c2 = color("#ee851b");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(6)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(608, 250);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#be660e");
      let c2 = color("#ee851b");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(7)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(595, 217);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#be660e");
      let c2 = color("#ee851b");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(8)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  textFont("Gaegu")
  textSize(50)
  textSize(35)
  text("411730566,吳晨希",500,200)
  strokeWeight(2)
}