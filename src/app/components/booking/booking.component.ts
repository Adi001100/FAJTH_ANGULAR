import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../service/order.service';
import { OrderInfoDTO } from '../../model/order-info-dto.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  myForm!: FormGroup;
  orderInfo?: OrderInfoDTO;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      locationName: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientName: ['', Validators.required],
      hours: [null, Validators.required],
      style: [''],
      others: ['']
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.orderService.createOrder(this.myForm.value).subscribe(
        response => {
          console.log('Order created successfully', response);
          this.orderInfo = response;
        },
        error => {
          console.error('Error creating order', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
