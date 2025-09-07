import { useCallback, useEffect, useState } from "react";
import { Form, Formik } from "formik";

import { EditSchema, initialValues } from "./helpers/_schemas";
import Field from "../../_metronic/helpers/components/inputs/Field";

import { ListLoading } from "../../_metronic/helpers/components/table/components/loading/ListLoading";

import { useNavigate, useParams } from "react-router-dom";
import { getDocument, updateDocument } from "./helpers/_requests";
import InputFile from "../../_metronic/helpers/components/inputs/Image";
import Select from "../../_metronic/helpers/components/inputs/Select";
import { uploadFile } from "../../helpers/files";

const EditDocumentWrappeer = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [isLoading, setIslOading] = useState(true);
  const [image, setImage] = useState<any>(null)
  const [newImage, setNewImage] = useState<any>(null)

  const [document, setDocument] = useState(initialValues);
  const id = params.id;

  const fetchDocument = useCallback(async () => {
    setIslOading(true);
    const query = await getDocument(id);
    const product = query.data
    setDocument(product);
    if (product.images.length) {
      setImage(product.images[0])
    }
    setIslOading(false);
  }, [id]);

  useEffect(() => {
    fetchDocument();
  }, []);

  async function onSubmit(values: any) {
    try {
      if (image && newImage) {
        const filepath = await uploadFile(image)
        values.images = [filepath]
      }

      await updateDocument(id, values);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  }
  if (isLoading) {
    return <ListLoading />;
  }
  return (
    <Formik
      validationSchema={EditSchema}
      initialValues={document}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          {import.meta.env.MODE === "development" && (JSON.stringify(formik.errors))}
          {import.meta.env.MODE === "development" && (JSON.stringify(formik.values))}

          <div className="px-10 pt-lg-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-6 ms-0 px-0">
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Foto
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <InputFile
                    image={image}
                    onChange={(file: any) => {
                      setNewImage(file)
                      setImage(file)
                    }}
                  />
                </div>
              </div>
              <div className="row mb-6 ms-0 px-0">
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Nombre
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="name"
                    placeholder="Nombre"
                    type="text"
                  />
                </div>
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Categoria
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Select
                    form={formik}
                    name="category"
                    placeholder="category"
                    source="categories"
                  />
                </div>
              </div>

              <div className="row mb-6 ms-0 px-0">
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Descripcion
                </label>
                <div className="col-lg-10 fv-row mt-4">
                  <Field
                    form={formik}
                    name="description"
                    placeholder="Descripcion"
                  />
                </div>
              </div>
              <div className="row mb-6 ms-0 px-0">
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Estado
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Select
                    form={formik}
                    name="status"
                    placeholder="Estado"
                    options={[
                      { name: "Borrador", id: "draft" },
                      { name: "Publicado", id: "published" },
                      { name: "Agotado", id: "out_of_stock" },
                    ]}
                  />
                </div>
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Precio
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="price"
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Unidades en Espanol
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="esp_stock"
                    placeholder="Unidades"
                    type="number"
                  />
                </div>
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Unidades en Ingles
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="eng_stock"
                    placeholder="Unidades"
                    type="number"
                  />
                </div>
              </div>

              <div className="text-right w-100 pt-lg-15 d-flex justify-content-end">
                <button
                  type="reset"
                  onClick={() => navigate("..")}
                  className="btn btn-light me-3"
                  data-kt-users-modal-action="cancel"
                  disabled={formik.isSubmitting}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                  disabled={formik.isSubmitting || !formik.isValid || !formik.touched}
                >
                  <span className="indicator-label">Editar</span>
                  {(formik.isSubmitting) && (
                    <span className="indicator-progress">
                      Editando...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2">
                      </span>
                    </span>
                  )}
                </button>
              </div>
            </form>
            {(formik.isSubmitting) && <ListLoading />}
          </div>
        </Form>
      )}
    </Formik>
  );
};
export { EditDocumentWrappeer };
