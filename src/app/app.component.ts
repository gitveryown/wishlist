import { Component } from '@angular/core';
import { WishItem } from 'src/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wishlist';

  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself')
  ]
  
  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  }
  
  newWishItem = ''
  
  addNewWish(){
    this.items.push(new WishItem(this.newWishItem))
    this.newWishItem = ''
  }
  
  
}
