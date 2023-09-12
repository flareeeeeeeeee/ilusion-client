import React, { useCallback, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";

import { EditSchema, initialValues } from "./helpers/_schemas";
import Field from "../../_metronic/helpers/components/inputs/Field";
import { ListLoading } from "../../_metronic/helpers/components/table/components/loading/ListLoading";

import { useNavigate, useParams } from "react-router-dom";
import { getDocument, updateDocument } from "./helpers/_requests";

const EditDocumentWrappeer = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [isLoading, setIslOading] = useState(true);
  const [document, setDocument] = useState(initialValues);
  const id = params.id;

  const fetchDocument = useCallback(async () => {
    setIslOading(true);
    const query = await getDocument(id);
    setDocument(query.data);
    setIslOading(false);
  }, [id]);
  useEffect(() => {
    fetchDocument();
  }, []);

  async function onSubmit(values: any, formikHelpers: any) {
    try {
 
      const payload = {
        name: values.name,
        email: values.email,
      };
      await updateDocument(id, payload);
      navigate("/users");
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
          <div className="px-10 pt-lg-10">
            <form onSubmit={formik.handleSubmit}>
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
                  Email
                </label>
                <div className="col-lg-4 fv-row mt-4">
                  <Field
                    form={formik}
                    name="email"
                    placeholder="email"
                    type="email"
                  />
                </div>
              </div>

              <div className="text-right w-100 pt-15 d-flex justify-content-end">
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
