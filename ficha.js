class Ficha {

    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
    }

    movPiez(tab){
        return tab;
    }

}

class Peon extends Ficha{

    constructor(color,x,y){
        super(color,x,y);
        this.primermovimiento = true;
    }

    movPiez(tab){
        var movimiento = [];
        const dir = this.color ==='blanco' ? -1 : 1;

        if(tab[this.x]?.[this.y+dir] === null){
            movimiento.push([this.x,this.y+dir,0]);
            if(this.primermovimiento = true && tab[this.x]?.[this.y+2*dir] === null){
               movimiento.push([this.x,this.y+2*dir,0]);
            }
        } 

        for(let diagx of [-1,1]){
            const movx = this.x+movx;
            const movy = this.y+dir;

            if(tab[movx][movy].color != this.color){
                movimiento.push([movx,movy,1]);
            }
        }

        return movimiento;

        
    }

}