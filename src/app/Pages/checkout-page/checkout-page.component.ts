import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      expirationDate: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]{4}'),
        ],
      ],
      cvv: [
        '',
        [
          Validators.required,
          // Validators.pattern('^(0[1-9]|1[0-2])/([0-9]{4})$'),
        ],
      ],
    });
  }

  onSubmit(): void {
    // console.log('Form data:', this.checkoutForm.value);
    this.router.navigate(['/shipping-address']);
  }
}
