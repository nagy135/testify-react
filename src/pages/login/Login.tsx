import React, { useCallback, useEffect } from "react";
import {
  AvatarSC,
  CardContentSC,
  FormWrapper,
  LoginContainer,
  Paper,
  SubmitButton,
} from "./Login.styled";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, LinearProgress, TextField, Typography } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { actions as appActions } from "../../store/app";
import { ILoginForm, initialValues, loginSchema } from "./Login.schema";
import { RootState, TOperationStatus } from "../../store/storeType";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";

const Login = React.memo(() => {
  const { t } = useTranslation("app");
  const dispatch = useDispatch();
  const { push } = useHistory();

  const loginStatus = useSelector<RootState, TOperationStatus | undefined>(
    (state) => state.app.loginStatus
  );

  useEffect(() => {
    dispatch(appActions.loginReset());
    return () => {
      dispatch(appActions.loginReset());
    };
  }, [dispatch]);

  useEffect(() => {
    if (loginStatus === "success") {
      push("dashboard");
    }
  }, [loginStatus, push]);

  /**
   * Try login user
   */
  const onSubmit = useCallback(
    (values: ILoginForm) => {
      dispatch(appActions.loginRequest(values));
    },
    [dispatch]
  );

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <LoginContainer maxWidth="xs">
      <Paper>
        <Card>
          {loginStatus === "pending" && <LinearProgress />}
          <CardContentSC>
            <AvatarSC>
              <LockOutlinedIcon />
            </AvatarSC>
            <Typography component="h1" variant="h5">
              {t("login.title")}
            </Typography>
            <FormWrapper noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label={t("login.emailLabel")}
                placeholder={t("login.emailPlaceholder")}
                autoComplete="email"
                autoFocus
                error={(touched.email && errors.email) as boolean}
                helperText={errors.email ? t(errors.email as any) : undefined}
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label={t("login.passwordLabel")}
                placeholder={t("login.passwordPlaceholder")}
                type="password"
                autoComplete="current-password"
                error={(touched.password && errors.password) as boolean}
                helperText={
                  errors.password ? t(errors.password as any) : undefined
                }
                value={values.password}
                onChange={handleChange}
              />
              <SubmitButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {t("login.submitAction")}
              </SubmitButton>
            </FormWrapper>
            <Box alignItems="center" display="flex">
              {t("title")}
              <Copyright />
            </Box>
          </CardContentSC>
        </Card>
      </Paper>
    </LoginContainer>
  );
});

export default Login;
