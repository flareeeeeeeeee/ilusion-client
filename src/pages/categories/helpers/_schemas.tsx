
import * as yup from "yup";


export const newCompanySchema = yup.object().shape({
    name: yup.string().min(3, "Longitud minima 3 digitos").required("Campo obligatorio"),

})
export const EditCompanySchema = yup.object().shape({
    name: yup.string().min(3, "Longitud minima 3 digitos").required("Campo obligatorio"),
})
export const initialValues = {
    name: "",

}