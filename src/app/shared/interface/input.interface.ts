import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface IInputConfig {
    type: string;
    element: 'input'|'textarea';
    label?: string;
    placeholder: string;
    errors: {
        required: string;
        pattern: string;
        minLength: string;
    };
    appearance: MatFormFieldAppearance;
    hint?: string;
    matSuffixIcon?: string;
    matPrefixIcon?: string;
    suffixContent?: string;
    prefixContent?: string;
    classes?: {
      formFieldClass?: string;
      inputClass?: string;
      inputWrapperClass?: string;
      matSuffixIconClass?: string;
    }
}