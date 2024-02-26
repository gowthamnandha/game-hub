import  { useEffect, useState } from "react";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Product from "./Product";

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<ProductData[]>([]); // Specify the type of products

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        className="grid"
      >
        <GridItem pl="2" className="nav" area={"nav"}>
          <h5>E-commerce store</h5>
        </GridItem>
        <GridItem pl="2" className="main" area={"main"}>
          <HStack spacing="20px" justifyContent="flex-start" flexWrap="wrap">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </HStack>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
