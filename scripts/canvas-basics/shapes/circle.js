//@ts-check

export class circle {
    constructor(x, y, ctx, canvas) {
        canvas=document.getElementById("bideo-game")
        ctx = canvas.getContext("2d")
        this.x=x;
this.y=y;
this.ctx=ctx
this.canvas=canvas


;
this.hue=Math.floor(Math.random()*360);
this.speedMult = 15
this.speedX=Math.floor(Math.random()*this.speedMult) + 1;
this.radius = 30
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
        else if(this.x+this.radius>this.canvas.width){
            //offscreen right: move left
            this.dirX=-1;
        };
        if(this.y<0){
            //off screen - left side: move right
this.dirY=1;
        }
        else if(this.y+this.radius>this.canvas.height){
            //offscreen right: move left
            this.dirY=-1;
        };
    };
    draw (){
        
        this.ctx.beginPath();
this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
this.ctx.lineWidth = 10;
this.ctx.strokeStyle = `hsla(${this.hue}, 100%, 78%, 100%`;
this.ctx.stroke();   
    };
}