
import * as yup from "yup";


export const newSchema = yup.object().shape({
    name: yup.string().min(3, "Longitud minima 3 digitos").required("Campo obligatorio"),

})
export const EditSchema = yup.object().shape({
    name: yup.string().min(3, "Longitud minima 3 digitos").required("Campo obligatorio"),
})
export const initialValues = {
    name: "",
    description: "",
    category: 0,
    status: "draft",
}