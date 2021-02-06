import React, { PropsWithChildren, useCallback } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  AppBarSC,
  Content,
  DrawerSC,
  DRAWER_WIDTH,
  IconButtonSC,
  MenuLayoutSC,
  RightContent,
  ToolBar,
} from "./MenuLayout.styled";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@store/storeType";
import { IUser } from "@store/app/appType";

/**
 * Generate theme for nested components
 */
const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

interface MenuLayoutProps {
  /**
   * Component that will be rendered in menu space
   */
  MenuComponent?: React.ReactElement | React.ReactNode[];
}

/**
 * Layout component with side menu
 */
const MenuLayout = React.memo<PropsWithChildren<MenuLayoutProps>>(
  ({ children, MenuComponent }) => {
    const theme = useTheme();
    const classes = useStyles();
    const { t } = useTranslation("app");
    const [open, setOpen] = React.useState(false);

    const user = useSelector<RootState, IUser | undefined>(
      (state) => state.app.user
    );

    const handleDrawerOpen = useCallback(() => {
      setOpen(true);
    }, []);

    const handleDrawerClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <MenuLayoutSC>
        <AppBarSC position="fixed" open={open}>
          <Toolbar>
            <IconButtonSC
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              open={open}
            >
              <MenuIcon />
            </IconButtonSC>
            <Typography variant="h6" noWrap>
              {t("title")}
            </Typography>
            <RightContent>
              <Typography>{`${user?.firstName} ${user?.lastName}`}</Typography>
            </RightContent>
          </Toolbar>
        </AppBarSC>
        <DrawerSC
          variant="permanent"
          className={clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <ToolBar className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </ToolBar>
          <Divider />
          {MenuComponent}
        </DrawerSC>
        <Content>
          <ToolBar className={classes.toolbar} />
          {children}
        </Content>
      </MenuLayoutSC>
    );
  }
);

export default MenuLayout;
