import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onOpen } = useSidebarContext();

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Text>Ateliê Ivana Andrade</Text>
      <Flex ml="auto">
        <HStack>
          <Text>Maria Ivana</Text>
          <Avatar size="md" name="maria Ivana" src="https://pps.whatsapp.net/v/t61.24694-24/56106010_2004293046543940_6888557325745913856_n.jpg?ccb=11-4&oh=01_AdRdd-SNh_NxBOC-xgj3qNKe1kT4bhOgN3_wySzntW7Avw&oe=63F0F2F8"/>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
