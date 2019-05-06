import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent  {
  @Input() public stock: Stock;
  @Output() private toggleFavorite:EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite=new EventEmitter<Stock>();
    this.toggleFavorite.emit(this.stock);
    
  }
  ontoggleFavorite(event){
    console.log(this.stock.name);
    this.stock.favorite=!this.stock.favorite;

  }
  
    
   
  
   

}
