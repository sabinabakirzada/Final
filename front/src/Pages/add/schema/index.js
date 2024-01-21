import * as Yup from 'yup';
 export const Foodschema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   price: Yup.number()
     .min(2, 'Too cheap!')
     .max(5000, 'Too expensive!')
     .required('Required'),
       description: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
      img: Yup.string()
     
     
     .required('Required'),
 });