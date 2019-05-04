export class Stock {
    favorite:boolean=false;
    constructor(public name:string,
                public code:string,
                public price:number,
                public previousprice:number,
                public favorite:boolean
    ){}
    isPositiveChange ():boolean{return this.price>=this.previousprice;}
}
