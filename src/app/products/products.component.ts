import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  category: string;
  filteredProducts: Product[]=[];
  constructor(productService: ProductService,
    private route : ActivatedRoute) {

   productService.getAll().subscribe(products=>{
     this.products=products;

    route.queryParamMap.subscribe(params => {
    this.category= params.get('category');
    
    this.filteredProducts= (this.category)?
    this.products.filter(p => p.category===this.category) :
    this.products;
   });

    



    });
   }

  ngOnInit() {
  }

}
