import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = 'John Doe';
  email: string = 'johndoe@example.com';
  mobileNumber: string = '123-456-7890';
  shippingAddress: string = '123 Main St, Anytown, USA';

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', Validators.pattern('^[6-9][0-9]{9}$')],
    shippingAddress: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.profileForm.valid) {
      // send updated profile information to server
      console.log('Profile updated');
    } else {
      console.log('Form is invalid');
    }
  }
}
