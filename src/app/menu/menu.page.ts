import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  // Array of menu items
  menuItems = [
    {
      name: 'Fried Rice Special Daging Hitam',
      description: 'Special recipe fried rice served with full of flavor of daging hitam, eggs, salad & cucumber',
      price: 20.9,
      
    },
    {
      name: 'Fried Rice Chicken',
      description: 'Special recipe fried rice served with full legs of fried chicken, eggs, salad & cucumber',
      price: 19.9,
      
    },
    {
      name: 'Mushroom Fried Rice',
      description: 'Pleasantly served with mushroom and fried chicken wings, salad & cucumber',
      price: 16.9,
      
    },
    {
      name: ' Seafood Fried Rice',
      description: 'Pleasantly served with squid, shrimp, chicken wing, salad & cucumber',
      price: 19.9,
      
    },
    {
      name: 'Curry Noodles',
      description: 'Special served with cookle, chicken fillet, fish ball, vegetable and boiled eggs.',
      price: 8.9,
      
    },
    {
      name: 'Asam Laksa',
      description: 'Special served with sliced mint leaves, cucumber, onion & pineapple, boiled eggs & red chili.',
      price: 8.9,
      
    },
    {
      name: 'Chicken Soup Noodles',
      description: 'Pleasantly served with chicken fillet, bean sprout, fish cake, fish balls, leaf/chinese celery and scallions.',
      price: 8.9,
      
    },
    {
      name: 'Fried Kuey Teow',
      description: 'Pleasantly served with cockle, shrimp, chives and bean sprouts & chili pickled',
      price: 7.9,
      
    },
    {
      name: 'Fried Noodles',
      description: 'Pleasantly served with shrimp and bean sprouts, dried tofu and fish cake.',
      price: 7.9,
      
    }
    
    // Add more menu items as needed
  ];

  constructor() { }
}
