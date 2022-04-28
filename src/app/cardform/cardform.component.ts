import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css'],
})
export class CardformComponent implements OnInit {
  public cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  public get nameControl(): AbstractControl | null {
    return this.cardForm.get('name');
  }

  public get cardNumberControl(): AbstractControl | null {
    return this.cardForm.get('cardNumber');
  }
  public get expirationControl(): AbstractControl | null {
    return this.cardForm.get('expiration');
  }
  public get securityCodeControl(): AbstractControl | null {
    return this.cardForm.get('securityCode');
  }
  constructor() {
    console.log(this.cardForm.get('name'));
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form was submitted');
  }

  cardFormReset() {
    this.cardForm.reset();
  }
}
