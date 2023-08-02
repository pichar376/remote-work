import { LayoutSltyled } from "./stylesLayout";

const Layout = ({ children }) => {
  // Abre una ventana emergente con ancho 800px y alto 600px
  window.open("", "_blank", "width=800,height=600");

  return <LayoutSltyled>{children}</LayoutSltyled>;
};

export default Layout;
