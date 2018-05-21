import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      name: "Uthappizza",
      image: "images/uthappizza.png",
      category: "mains",
      label: "Hot",
      price: "4.99",
      description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
    },

    {
      name: "Zucchipakoda",
      image: "images/zucchipakoda.png",
      category: "appetizer",
      label: "",
      price: "1.99",
      description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce."
    },

    {
      name: "Vadonut",
      image: "images/vadonut.png",
      category: "appetizer",
      label: "New",
      price: "1.99",
      description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
    },

    {
      name: "ElaiCheese Cake",
      image: "images/elaicheesecake.png",
      category: "dessert",
      label: "",
      price: "2.99",
      description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms."
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}