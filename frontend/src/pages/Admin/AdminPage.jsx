import React from "react";
// import Sidebar from "./Sidebar";
// import { MobileNav } from "./Sidebar";
import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import AdminSidebar, { MobileNav } from "../../components/AdminSideBar";
import Dashboard from "../../components/Dashboard";

const AdminPage = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <AdminSidebar onClose={onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <AdminSidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {window.location.pathname == "/admin" ? <Dashboard/> : children }
      </Box>
    </Box>
  );
};

export default AdminPage;
