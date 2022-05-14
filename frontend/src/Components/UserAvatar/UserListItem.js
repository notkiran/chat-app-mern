import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        bg: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      p="3px 2px"
      mb="2px"
      borderRadius="lg"
    >
      <Avatar
        size="sm"
        mr={2}
        name={user.name}
        src={user.pic}
        cursor="pointer"
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs" color="gray">
          <b>Email :</b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
