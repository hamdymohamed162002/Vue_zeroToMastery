import { Field as VeeField, Form as VeeForm, ErrorMessage } from 'vee-validate';
import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
export default {
    install(app) {
        app.component('VeeField', VeeField);
        app.component('VeeForm', VeeForm);
        app.component('ErrorMessage', ErrorMessage);
        defineRule('required', required);
    }

}