import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/Services/plan.service';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})

export class CreateplanComponent implements OnInit {

  planForm:any= FormGroup;

  ngOnInit() {
    this.addplanlista();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public planService: PlanService
  ) { }

  addplanlista() {
    this.planForm = this.fb.group({
      kilocalorias: ['', Validators.required],
      fibra: ['', Validators.required],
      grasa: ['', Validators.required],
      carbohidratos: ['', Validators.required],
      proteina: ['', Validators.required]
    });
  }

  submitForm() {
    this.planService.Createplan(this.planForm.value).subscribe((res) => {
      console.log('Plan agregado!');
      this.ngZone.run(() => this.router.navigateByUrl('/listarplanesdeportivos'));
    });
  }

}
