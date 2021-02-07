// react-i18next.d.ts
import { resources } from "./i18n";

declare module "react-i18next" {
  type DefaultResources = typeof resources["sk"];
  interface Resources extends DefaultResources {}
}
