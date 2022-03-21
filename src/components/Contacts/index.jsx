import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Footer from "../Footer";

const PUBLIC_RELATIONS = {
  "Content and blogging": "content_blogging",
  "Design and Deco": "design_deco",
  "Quality Control and Management": "qcm",
  "Web development": "webdev",
  "Treasury and pricing": "treasury",
  "Event coordination and conduction": "ecc",
  "Logistics and Security": "logistics",
  Proshows: "proshows",
  "Publicity and Relations": "publicity",
  Sponsorship: "sponsorship",
  Hospitality: "hospitality",
};

export default function Contacts() {
  return (
    <>
      <Container className="container">
        <h1 className="title">Contact Us</h1>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            publicRelation: "",
            message: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form className="row g-3">
            <div className="col-12">
              <label htmlFor="full-name" className="form-label">
                Full Name
              </label>
              <Field
                name="fullName"
                required
                placeholder="Akash"
                type="text"
                className="form-control"
                id="full-name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                required
                placeholder="akash@gmail.com"
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone/Mobile
              </label>
              <Field
                name="phone"
                required
                placeholder="+918855885588"
                type="tel"
                className="form-control"
                id="phone"
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="public-relation" className="form-label">
                Public relation
              </label>
              <Field
                as="select"
                name="publicRelation"
                required
                id="public-relation"
                className="form-select"
              >
                <option value="">Choose</option>
                {Object.keys(PUBLIC_RELATIONS).map((key) => (
                  <option key={key} value={PUBLIC_RELATIONS[key]}>
                    {key}
                  </option>
                ))}
              </Field>
            </div>

            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Your message
              </label>
              <Field
                as="textarea"
                name="message"
                required
                placeholder="type your message here..."
                className="form-control"
                id="message"
                rows="3"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 6rem 1rem 1rem;
  max-width: 800px;

  .title {
    margin-bottom: 2rem;
  }
`;
