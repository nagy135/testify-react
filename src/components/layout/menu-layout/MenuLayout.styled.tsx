import { AppBar, Drawer, IconButton } from "@material-ui/core";
import styled, { css } from "styled-components";

export const DRAWER_WIDTH = 240;

export const MenuLayoutSC = styled.div`
  display: flex;
`;

export const AppBarSC = styled(AppBar)<{ open: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: ${({ theme }) =>
    theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};

  ${({ theme, open }) =>
    open
      ? css`
          margin-left: ${DRAWER_WIDTH};
          width: calc(100% - ${DRAWER_WIDTH}px);
          transition: ${theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          })};
        `
      : ""}
`;

export const IconButtonSC = styled(IconButton)<{ open: boolean }>`
  margin-right: 36px;

  display: ${({ open }) => (open ? "none" : "block")};
`;

export const DrawerSC = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
`;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(0, 1)};

  &.MuiPaper-root {
    background: pink;
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
