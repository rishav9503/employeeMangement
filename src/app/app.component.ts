import { Component } from '@angular/core';
import { employeeData } from '../employeeData.service'
import { DataService } from '../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employeedata';

import { OnInit, ViewChild } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'emp';

  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol', 'office', 'home', 'temp', 'permanent'];
  dataSource = [];
  employees: employeeData[] = [];
  fetchId = 1;
  profileForm;
  tempAddress;
  homeContact;
  workAddress;

  searchText

  constructor(private dataservice: DataService) { }


  getUser() {
    this.dataservice.getUsers().subscribe(data => {
      this.employees = data;
      this.dataSource = this.employees
      console.log(this.dataSource, "datas");


    });
  }







  ngOnInit() {
    this.getUser();
    this.profileForm = new FormGroup({
      name: new FormControl('', {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      age: new FormControl('', {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      gender: new FormControl('', {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      employeeId: new FormControl(0, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      tempAddress: new FormGroup({
        street: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        city: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        state: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        country: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        })
      }),
      permanentAddress: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl('')
      }),
      homeContact: new FormGroup({
        email: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        phone: new FormControl('', {
          updateOn: "blur",
          validators: [Validators.required]
        }),
      }),
      workContact: new FormGroup({
        email: new FormControl(''),
        phone: new FormControl(''),
      })

    });

  }
  addEmployee() {
    console.log(this.profileForm.name, "value");




    this.dataservice.addUser(this.profileForm.value).subscribe(data => {
      let employees = data;
      this.profileForm.reset();
      console.log(employees);
    });
    this.getUser();
  }





}
