console.log("main.js called")
var objectSet = [];

var myDrawingPage = new DrawingPage(290,30,490,540, colArray[1][0], colArray[3][5], colArray[3][5]);
var myBackground = new Background (20,200,247,310, colArray[1][0], colArray[2][2]);
var butRect = new Button("Rectangle", 96, 40, 100, 40, colArray[2][2], colArray[1][0], colArray[2][2], colArray[2][4],canvas);
var butElli = new Button("Ellipse", 96, 90, 100, 40, colArray[2][2], colArray[1][0], colArray[2][2], colArray[2][4],canvas);
var butDiam = new Button("Diamond", 96, 140, 100, 40, colArray[2][2], colArray[1][0], colArray[2][2], colArray[2][4], canvas);
var butUndo = new Button("Undo", 30, 530, 100, 40, colArray[1][0], colArray[2][2], colArray[1][0], colArray[1][0], canvas);
var butReset = new Button("Reset", 157, 530, 100, 40, colArray[1][0], colArray[2][2], colArray[1][0], colArray[1][0], canvas);

var butAA = new Swatch(30, 210, 65, 40, colArray[1][1], colArray[1][3], canvas); 
var butAB = new Swatch(110, 210, 65, 40, colArray[1][1], colArray[4][3], canvas); 
var butAC = new Swatch(190, 210, 65, 40, colArray[1][1], colArray[3][4], canvas); 
var butBA = new Swatch(30, 260, 65, 40, colArray[1][1], colArray[0][2], canvas); 
var butBB = new Swatch(110, 260, 65, 40, colArray[1][1], colArray[3][3], canvas); 
var butBC = new Swatch(190, 260, 65, 40, colArray[1][1], colArray[2][8], canvas); 
var butCA = new Swatch(30, 310, 65, 40, colArray[1][1], colArray[3][0], canvas);
var butCB = new Swatch(110, 310, 65, 40, colArray[1][1], colArray[2][6], canvas);  
var butCC = new Swatch(190, 310, 65, 40, colArray[1][1], colArray[2][3], canvas); 
var butDA = new Swatch(30, 360, 65, 40, colArray[1][1], colArray[2][7], canvas); 
var butDB = new Swatch(110, 360, 65, 40, colArray[1][1], colArray[2][5], canvas); 
var butDC = new Swatch(190, 360, 65, 40, colArray[1][1], colArray[2][4], canvas); 
var butEA = new Swatch(30, 410, 65, 40, colArray[1][1], colArray[3][5], canvas); 
var butEB = new Swatch(110, 410, 65, 40, colArray[1][1], colArray[3][8], canvas); 
var butEC = new Swatch(190, 410, 65, 40, colArray[1][1], colArray[2][2], canvas); 
var butFA = new Swatch(30, 460, 65, 40, colArray[1][1], colArray[1][0], canvas);
var butFB = new Swatch(110, 460, 65, 40, colArray[1][1], colArray[4][0], canvas);
var butFC = new Swatch(190, 460, 65, 40, colArray[1][1], colArray[4][4], canvas);

objectSet.push(myDrawingPage,myBackground,butRect,butElli,butDiam,butUndo,butReset,butAA,butAB,butAC,butBA,butBB,butBC,
    butCA,butCB,butCC,butDA,butDB,butDC,butEA,butEB,butEC,butFA,butFB,butFC);

function animate(){
    ctx.clearRect(0,0,width,height);
    
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();