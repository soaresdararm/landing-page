interface GridItem {
  title: string;
  description: string;
}

interface GridData {
  background: boolean;
  title: string;
  description: string;
  grid: GridItem[];
}

const gridData: GridData = {
  background: false,
  title: "My grid",
  description:
    "Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde",
  grid: [
    {
      title: "Teste ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    },
    {
      title: "Teste ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    },
    {
      title: "Teste ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
    },
  ],
};

export default gridData;
