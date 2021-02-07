import * as Yup from "yup";

export interface ILoginForm {
  email: string;
  password: string;
}

export const initialValues: ILoginForm = {
  email: "",
  password: "",
};

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("validations:required")
    .email("validations:email"),
  password: Yup.string().required("validations:required"),
});
