import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
    }
    //allow only values 0-9 and no forward slash
    if (value?.match(/[^0-9|\/]/gi)) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }
    //no more than 5 values can be inputed
    // if (value.length > 5) {
    //   super.setValue(this.value, { ...options, emitModelToViewChange: true });
    //   return;
    // }
    //if the user value has length = to 2 and the current length =3 then let the user value pass through
    if (value?.length === 2 && this.value?.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }
    //set the forward slash after 2 values inputed
    if (value?.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
  }
}
