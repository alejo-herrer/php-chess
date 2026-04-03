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

export class Peon extends Ficha{

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
            const movx = this.x+diagx;
            const movy = this.y+dir;

            if(tab[movx][movy].color != this.color){
                movimiento.push([movx,movy,1]);
            }
        }

        return movimiento;  

    }

}

export class PiezDes extends Ficha{

    constructor(color,x,y,dir){
        super(color,x,y);
        this.dir = dir;
    }

    movPiez(tab){
        var movimiento = [];

        for(let dir of this.dir){
            for(let i = 1; i<8 ; i++){
                let x = this.x + i * dir[0];
                let y = this.y + i * dir[1];  
                
                if (x < 0 || x > 7 || y < 0 || y > 7) break;

                let pieza = tab[x]?.[y];

                if(pieza === null){
                    movimiento.push([x,y,0]);
                } else {
                    if(pieza.color !== this.color){
                        movimiento.push([x,y,1]);
                    }
                    break;
                }
            }
        }

        return movimiento;  

    }


}

export class Alfil extends PiezDes{

    constructor(color,x,y){
        super(color,x,y,[[1,1],[-1,1],[1,-1],[-1,-1]]);
    }

}

export class Torre extends PiezDes{

    constructor(color,x,y){
        super(color,x,y,[[1,0],[-1,0],[0,1],[0,-1]]);
    }

}

export class Reina extends PiezDes{

    constructor(color,x,y){
        super(color,x,y,[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]);
    }

}

export class Rey extends PiezDes{

    constructor(color,x,y){
        super(color,x,y,[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]);
    }

    movPiez(tab){
        var movimiento = [];

        for(let dir of this.dir){
            
            let x = this.x + dir[0];
            let y = this.y + dir[1];  
            
            if (x < 0 || x > 7 || y < 0 || y > 7) continue;
            let pieza = tab[x]?.[y];
            if(pieza === null){
                movimiento.push([x,y,0]);
            } else {
                if(pieza.color !== this.color){
                    movimiento.push([x,y,1]);
                }
            }
            
        }

        return movimiento;  

    }

}



