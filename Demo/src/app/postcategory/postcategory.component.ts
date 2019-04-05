import { Component, OnInit } from '@angular/core';
import { PostCategory } from './postcategory';
import { PostcategoryService } from "./postcategory.service";  
import { Observable } from 'rxjs';  
@Component({
  selector: 'app-postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})
export class PostcategoryComponent implements OnInit {
  allEmployees: Observable<PostCategory[]>; 
  postcategory:PostCategory [];
  postCategoryIdUpdate = null;
  dataSaved = false; 
  massage = null; 
  postCategoryForm: any; 
  constructor(private postcCategory:PostcategoryService) { }

  ngOnInit() {
    this.loadAllPostcategory();
  }
  loadAllPostcategory() {  
    this.postcCategory.getAll().subscribe(ressult =>{
      this.postcategory=ressult;
    });  
  }  

  CreateEmployee(postcategory: PostCategory) {  
    if (this.postCategoryIdUpdate == null) {  
      this.postcCategory.create(postcategory).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllPostcategory();  
          this.postCategoryIdUpdate = null;  
          this.postCategoryForm.reset();  
        }  
      );  
    } else {  
      postcategory.Id = this.postCategoryIdUpdate;  
      this.postcCategory.create(postcategory).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllPostcategory();  
        this.postCategoryIdUpdate = null;  
        this.postCategoryForm.reset();  
      });  
    }  
  }   

  resetForm() {  
    this.postCategoryForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  } 

}
