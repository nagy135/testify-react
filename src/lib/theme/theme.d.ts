// import original module declarations
import "styled-components/native";
import defaultTheme from "./defaultTheme";

type TDefaultTheme = typeof defaultTheme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends TDefaultTheme {}
}
