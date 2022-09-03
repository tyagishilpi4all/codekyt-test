import * as yup from 'yup';
export const inputValidationSchema = yup.object({
    value: yup
        .string()
        .required('Input value required')
});
