import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


// interface DataItem {
//   schoolcode: number;
//   registrationNo: string;
//   mpesaNo: number;
//   amount: number;
// }

@Component({
  selector: 'app-fee-payment',
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.css']
})
export class FeePaymentComponent{
  isCollapsed = false;

  // adminForm !: FormGroup;
}


// ngOnInit(): void{
//   this.adminForm = new FormGroup({
//     'schoolcode' : new FormControl(),
//     'registrationNo' : new FormControl(),
//     'mpesaNo' : new FormControl(),
//     'amount' : new FormControl()
//   })

