import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Base64 } from "js-base64";

import { initialValues, newSchema } from "./helpers/_schemas";
import Field from "../../_metronic/helpers/components/inputs/Field";
import Select from "../../_metronic/helpers/components/inputs/Select";
import { ListLoading } from "../../_metronic/helpers/components/table/components/loading/ListLoading";

import { useNavigate } from "react-router-dom";
import { createDocument } from "./helpers/_requests";
import InputFile from "../../_metronic/helpers/components/inputs/Image";
import { uploadFile } from "../../helpers/files";

const NewDocumentWrappeer = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null)
  async function onSubmit(values: any) {
    if (image) {
      const filepath = await uploadFile(image)
      values.images = [filepath]
    }

    await createDocument(values);
    navigate("/products");
  }

  return (
    <Formik
      validationSchema={newSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="px-10 pt-lg-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="row mb-6 ms-0 px-0">
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Foto
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <InputFile
                    onChange={setImage}
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
                  Precio
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="prize"
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <label className="col-sm-12 col-lg-2 col-form-label required fw-bold fs-6 mt-4">
                  Unidades
                </label>
                <div className="col-lg-4 fv-row mt-4 ">
                  <Field
                    form={formik}
                    name="units"
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
                  disabled={formik.isSubmitting || !formik.isValid ||
                    !formik.touched}
                >
                  <span className="indicator-label">Agregar</span>
                  {(formik.isSubmitting) && (
                    <span className="indicator-progress">
                      Agregando...{" "}
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
export { NewDocumentWrappeer };
