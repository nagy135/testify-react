import { Avatar, Button, Container } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import styled from "styled-components";

export const LoginContainer = styled(Container)``;

export const Paper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarSC = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const FormWrapper = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const SubmitButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`;

export const CardContentSC = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
