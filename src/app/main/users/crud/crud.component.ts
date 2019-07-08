import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {tap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import {from} from "rxjs";




@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  hostelForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore

  ) {}

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.hostelForm = this.fb.group({
      name: [[Validators.required]],
      size: [[Validators.required]],
    })
  }

  postForm() {
    from(this.afs.collection('supProject_Team_Project_2').doc('current').collection('rooms').add(this.hostelForm.value)
      .pipe(
        tap(x => console.log(x)))
      )
      .subscribe()
  }




}


