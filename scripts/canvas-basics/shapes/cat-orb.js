//@ts-check
// Create a new image element 
const img = document.createElement('img'); 
 
// Set the source and other attributes 
img.src = 'downloads/cat orb wow.gif'; // Specify the path to your image 
img.alt = 'rotatingCatOrb'; // Alt text for accessibility 
img.width = 300; // Optional: set width 
img.height = 200; // Optional: set height 
 
// Append the image to a specific element in the document 
document.body.appendChild(img); // This will add the image to the body 
export class catOrb {
    constructor(x, y, ctx, canvas) {
        canvas=document.getElementById("bideo-game")
        ctx = canvas.getContext("2d")
        this.x=x;
this.y=y;
this.ctx=ctx
this.canvas=canvas


this.width=50;
this.height=this.width;
this.hue=Math.floor(Math.random()*360);
this.speedMult = 15
this.speedX=Math.floor(Math.random()*this.speedMult) + 1;

this.speedY=Math.floor(Math.random()*this.speedMult) + 1;
this.dirX = 1;
this.dirY = 1;
    }
    update(){
        this.x += this.speedX * this.dirX;
        this.y += this.speedY * this.dirY;
        this.hue++;

        if(this.hue > 360){
            this.hue=0;
        }
        if(this.x<0){
            //off screen - left side: move right
this.dirX=1;
        }
        else if(this.x+this.width>this.canvas.width){
            //offscreen right: move left
            this.dirX=-1;
        };
        if(this.y<0){
            //off screen - left side: move right
this.dirY=1;
        }
        else if(this.y+this.height>this.canvas.height){
            //offscreen right: move left
            this.dirY=-1;
        };
    };
    draw (){
        this.ctx.fillStyle = `hsla(${this.hue}, 100%, 78%, 100%`
        this.ctx.draw(img);   
    };
}