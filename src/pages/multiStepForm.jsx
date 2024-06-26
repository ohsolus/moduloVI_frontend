import React from "react";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";
import { Card, CardContent } from "@mui/material";
import { Field, Form, Formik, FormikValues, FormikConfig } from "formik";
import { CheckboxWithLabel, TextField } from "formik-mui";
import { object, mixed, number } from "yup";

export default function MultiStepForm() {
  return (
    <Card>
      <CardContent>
        <Formik
          validationSchema={object({
            money: mixed().when("millionaire", {
              is: true,
              then: number()
                .required()
                .min(1_000_000, "Because you said that yu are"),
              otherwise: number().required(),
            }),
          })}
          initialValues={{
            firstName: "",
            lastName: "",
            millionaire: false,
            money: 0,
            description: "",
          }}
          onSubmit={() => {}}
        >
          <Form autoComplete="off">
            <div>
              <Field
                name="firstName"
                component={TextField}
                label="First Name"
              />
              <Field name="lastName" component={TextField} label="Last Name" />
              <Field
                name="millionaire"
                type="checkbox"
                component={CheckboxWithLabel}
                label={{ label: "It's a test" }}
              />
            </div>
            <div>
              <Field
                name="money"
                type="number"
                component={TextField}
                label="money"
              />
            </div>
            <div>
              <Field
                name="description"
                component={TextField}
                label="Description"
              />
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}
