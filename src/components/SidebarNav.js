import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
          CADASTRO
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "gray.200" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                VESTIDOS
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="xs" fontWeight="bold" color="gray.400">
          ESTOQUE
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "gray.200" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                STATUS
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "gray.200" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                ALUGAR
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "gray.200" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="gray.500">
                LOCADO
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Text fontSize="xs" fontWeight="bold" color="gray.400">
        <a href="https://www.google.com" target="_blank" >SITE PARA CONSULTA</a>
        </Text>
    </Stack>
  );
};

export default SidebarNav;
