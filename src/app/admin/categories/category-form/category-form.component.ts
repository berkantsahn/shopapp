import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit{

  editing: boolean = false;
  category: Category = new Category();

  constructor(private activeRoute: ActivatedRoute,private categoryRepository: CategoryRepository, private router: Router){
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if(this.editing){
      this.category = categoryRepository.getCategory(activeRoute.snapshot.params['id']);
    }
  }
  ngOnInit(): void {

  }


  save(form: NgForm){
    this.categoryRepository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }
}
