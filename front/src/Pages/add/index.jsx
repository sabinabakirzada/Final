import React from "react";
import { Formik, Form, Field } from "formik";
import { Foodschema } from "./schema";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./index.scss";
const Add = () => {

    const [form, setform] = useState([])
    
  return (
    <div id="add">
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eatwell || Add</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      <div className="container">
        <div className="add">
          <Formik
            initialValues={{ img: "", price: "", name: "", description: "" }}
            validationSchema={Foodschema}
            onSubmit={async (values, { resetForm }) => {
              const req = await axios("", values);
              resetForm();
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="add-form">
                <Field
                  type="text"
                  name="name"
                  placeholder="Food name"
                  className="add-filed"
                />
                {errors.name && touched.name && <p>{errors.name}</p>}
                <Field
                  type="url"
                  name="img"
                  placeholder="Food Img Url"
                  className="add-filed"
                />
                {errors.img && touched.img && <p>{errors.img}</p>}

                <Field
                  type="number"
                  name="price"
                  placeholder="Food price"
                  className="add-filed"
                />
                {errors.price && touched.price && <p>{errors.price}</p>}

                <Field
                  type="text"
                  name="description"
                  placeholder="Food description"
                  className="add-filed"
                />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Add;
