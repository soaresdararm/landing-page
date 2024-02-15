import GridText from "../components/GridText";
import gridData from "../components/GridText/mock";
import GridTwoColumn from "../components/GridTwoColum";
import links from "../components/NavLinks/mock";
import img from "../assets/javascript.svg";

export const mockBase = {
  children: (
    <>
      <GridTwoColumn
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores."
        }
        srcImg={img}
        {...gridData}
        background
      />
      <GridText {...gridData} />
      <GridText {...gridData} background />
      <GridText {...gridData} />
      <GridText {...gridData} background />
      <GridText {...gridData} />
    </>
  ),
  links: links,
  logoData: {
    text: "Logo",
    link: "home",
  },
  footerHtml: "<p>Teste de footer</p>",
};
