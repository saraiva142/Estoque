import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Produtos = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    setListProducts(db_products);
  }, []);

  const handleNewProduct = () => {
    if (!name) return;
    if (verifyProductName()) {
      alert("Produto já cadastrado!");
      return;
    }

    const id = Math.random().toString(36).substring(2);

    if (listProducts && listProducts.length) {
      localStorage.setItem(
        "db_products",
        JSON.stringify([...listProducts, { id, name, link }])
      );

      setListProducts([...listProducts, { id, name, link }]);
    } else {
      localStorage.setItem("db_products", JSON.stringify([{ id, name, link }]));

      setListProducts([{ id, name, link }]);
    }

    setName("");
    setLink("");
  };

  const verifyProductName = () => {
    return !!listProducts.find((prod) => prod.name === name);
  };

  const removeProduct = (id) => {
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs"))
      : [];

    const db_stock_entries = localStorage.getItem("db_stock_entries")
      ? JSON.parse(localStorage.getItem("db_stock_entries"))
      : [];

    const hasOutputs = db_stock_outputs.filter(
      (item) => item.product_id === id
    ).length;
    const hasEntries = db_stock_entries.filter(
      (item) => item.product_id === id
    ).length;

    if (hasEntries || hasOutputs) {
      alert("Esse produto possuí movimentações!");
      return;
    }

    const newArray = listProducts.filter((prod) => prod.id !== id);

    localStorage.setItem("db_products", JSON.stringify(newArray));

    setListProducts(newArray);
  };

  var URL = "https://github.com/saraiva142/Ninfa---Apartamento-AirBnB/settings/pages";

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Código do vestido"
            />
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Link do vestido"
            />
            <Button w="40" onClick={handleNewProduct}>
              CADASTRAR
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                    Link do Vestido
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.500">{item.name}</Td>


                    <Td color="gray.500">
                    
                    <Button
                    p="2"
                    h="auto"
                    fontSize={11}
                    color="blue.500"
                    fontWeight="bold"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">foto</a>
                    </Button>
                      
                    </Td>
                    
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeProduct(item.id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Produtos;
