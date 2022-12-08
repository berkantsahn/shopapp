import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product;

  constructor(private activeRoute: ActivatedRoute, private productRepository: ProductRepository){
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if(this.editing){
      this.product = productRepository.getProduct(activeRoute.snapshot.params['id']);
    }
  }

  ngOnInit(): void {

  }

  save(form: NgForm){

  }
}
