import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name</label>
          <Field type="text" name="name" />
        </div>
        <div className={css.group}>
          <label className={css.label}>Number</label>
          <Field type="phone" name="number" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
