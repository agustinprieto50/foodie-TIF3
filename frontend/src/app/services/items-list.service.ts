import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsListService {
  private items: any[] = []
  
  constructor() { }

  setItems(items: any[]) {
    this.items = items;
  }

  getItems(): any[] {
    return this.items;
  }

  addItem(item: any) {
    if (!this.items.includes(item)){
    this.items.push(item);
    console.log(this.items)
    }
    else{
      console.log("Item already added") 
    }
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  clearItems() {
    this.items = [];
  }
}


