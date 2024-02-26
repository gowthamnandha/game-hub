import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Product.css"; // Import the CSS file

interface ProductProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <div className="product-container">
      {" "}
      {/* Use a div with class 'product-container' */}
      <Image src={image} alt={name} className="product-image" />{" "}
      {/* Add class 'product-image' */}
      <Box className="product-details">
        {" "}
        {/* Add class 'product-details' */}
        <Text className="product-name">{name}</Text>{" "}
        {/* Add class 'product-name' */}
        <Text className="product-price">${price}</Text>{" "}
        {/* Add class 'product-price' */}
        <Text className="product-description">{description}</Text>{" "}
        {/* Add class 'product-description' */}
      </Box>
    </div>
  );
};

export default Product;
