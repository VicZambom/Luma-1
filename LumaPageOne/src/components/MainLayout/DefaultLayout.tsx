import { Box } from "@mui/material";
import { PersistentDrawerLeft } from "../SideBarPages";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export function DefaultLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <PersistentDrawerLeft open={open} setOpen={setOpen} />
      <Box
        sx={{
          flexGrow: 1,
          padding: (theme) => theme.spacing(3),
          m: 1,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
