import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers:[CategoryService]
})
export class ProductFormComponent implements OnInit  {
  
  categories$: any;
  product: any ={};
  id;
  title: any;
  imageUrl :any;
  category : any;
  price : any;

  constructor( 
    private route: ActivatedRoute,
    private router : Router,
    private categoryService: CategoryService,
    private productService : ProductService) { 
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p=> {
      this.product=p
    
    });
 
  }
  save(product)
  {
    if(this.id) this.productService.update(this.id , product);
     
    else this.productService.create(product);
     this.router.navigateByUrl('/admin/products');
  }

  delete()
  {
    if(confirm('Are your sure you want to delete this product?'))
    {
      this.productService.delete(this.id);
      this.router.navigateByUrl('/admin/products');
    }

  }
  ngOnInit() {
    
  }

}
