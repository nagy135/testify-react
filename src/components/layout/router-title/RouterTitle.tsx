import React from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

/**
 * Component to return new title of document based on current route
 */
const RouterTitle = React.memo(() => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${t("app:title")} | ${t(
        `routes:${location.pathname.replace("/", "")}` as any
      )}`}</title>
    </Helmet>
  );
});

export default RouterTitle;
