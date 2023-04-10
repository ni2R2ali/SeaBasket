import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  Form: FormGroup;
  editMode: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Form = this.fb.group({
      name: ['Edit name'],
      picture: ['Edit Photo'],
    });

    this.activatedRoute.queryParamMap.subscribe((res) => {
      // console.log(res.get('EditMode'));
      let qParams = res.get('EditMode');

      if (qParams != null) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      console.log(this.Form.value);
    } else {
      let key = Object.keys(this.Form.controls);
      // console.log(key)

      key.filter((data) => {
        // console.log(data)
        let control = this.Form.controls[data];
        // console.log(control)
        if (control.errors != null) {
          control.markAllAsTouched();
        }
      });
    }
  }

  onDiscard() {
    this.Form.reset();
    this.router.navigate([], { queryParams: { EditMode: null } });
  }
}
