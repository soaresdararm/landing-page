import GridText from "../components/GridText";
import gridData from "../components/GridText/mock";
import GridTwoColumn from "../components/GridTwoColum";
import links from "../components/NavLinks/mock";
import img from "../assets/javascript.svg";

export const mockBase = {
  children: (
    <>
      <GridTwoColumn
        text={"sbbsd sdhjsd jsdhjd jdj djhdjdj "}
        srcImg={img}
        {...gridData}
        background
      />
      <GridText {...gridData}  />
     

      <GridText {...gridData} background />
      <GridText {...gridData} />
      <GridText {...gridData} background />
      <GridText {...gridData} />
    </>
  ),
  links: links,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>Teste de footer</p>",
};
