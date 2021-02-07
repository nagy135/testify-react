import React, { PropsWithChildren, useCallback, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/storeType";
import { IUser } from "../../../store/app/appType";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Menu, MenuItem } from "@material-ui/core";
import { resetStore } from "../../../store/rootReducer";

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
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
      null
    );
    const [open, setOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const user = useSelector<RootState, IUser | undefined>(
      (state) => state.app.user
    );

    const toggleDrawer = useCallback(() => {
      setOpen((o) => !o);
    }, []);

    const toggleMenu = useCallback((e: React.SyntheticEvent) => {
      setAnchorEl(e.currentTarget);
      setUserMenuOpen((o) => !o);
    }, []);

    const logout = useCallback(() => {
      dispatch(resetStore());
    }, [dispatch]);

    return (
      <MenuLayoutSC>
        <AppBarSC position="fixed" open={open}>
          <Toolbar>
            <IconButtonSC
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              open={open}
            >
              <MenuIcon />
            </IconButtonSC>
            <Typography variant="h6" noWrap>
              {t("app:title")}
            </Typography>
            <RightContent>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
              >
                <AccountCircle />
                <Typography>{` ${user?.firstName} ${user?.lastName}`}</Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={userMenuOpen}
                onClose={toggleMenu}
              >
                <MenuItem onClick={logout}>
                  {t("components:menuLayout.userMenu.logout")}
                </MenuItem>
              </Menu>
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
            <IconButton onClick={toggleDrawer}>
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
