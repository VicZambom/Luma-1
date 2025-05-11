import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoLuma.png";
import { SvgIconComponent } from "@mui/icons-material";
import { UserCardInfo } from "../UserInfo";
import {
  CalendarSection,
  FrequentItems,
  MonthlyFrequencyChart,
} from "../content/HomePageContent";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => {
  const styles: React.CSSProperties = {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(["margin-left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: "0",
    width: "100%",
    position: "relative",
    display: "block",
    marginTop: "64px",
    // backgroundColor: "#F2F3F5",
    minHeight: "calc(100vh - 64px)",
  };

  if (open) {
    styles.transition = theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    });
    styles.marginLeft = `${drawerWidth - 1}px`;
    styles.width = `calc(100% - ${drawerWidth}px)`;
  } else {
    styles.marginLeft = "0px";
    styles.width = "100%";
  }

  return styles;
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["position", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  top: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
  marginBottom: theme.spacing(1),
}));

interface SidebarItem {
  text: string;
  icon: SvgIconComponent;
  path: string;
  color?: string;
}

export function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const sideBarItems: SidebarItem[] = [
    { text: "Início", icon: HomeOutlinedIcon, path: "/inicio", color: "white" },
    { text: "Pagamento", icon: WalletOutlinedIcon, path: "/pagamento" },
    { text: "Ponto", icon: AccessTimeOutlinedIcon, path: "/ponto" },
    { text: "Férias", icon: WbSunnyOutlinedIcon, path: "/ferias" },
    { text: "Fale com o RH", icon: ChatBubbleOutlineOutlinedIcon, path: "/rh" },
    { text: "Sair", icon: LogoutSharpIcon, path: "/sair" },
  ];
  const handleItemClick = (path: string, index: number) => {
    navigate(path);
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <Root>
      <CssBaseline />
      <AppBar open={open}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              sx={{
                color: "#5D3998",
                padding: "8px",
                visibility: "hidden",
              }}
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Espaço para outros elementos à direita se necessário */}
          <Box>
            <Typography>Teste</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#5D3998",
            color: "#fff",
            borderRight: "none",
            boxShadow: "none",
            position: "fixed", //
            height: "100vh", //
            top: 0, //
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "white", height: "64px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={Logo}
              alt="Logo da Luma"
              height="30"
              style={{ background: "white" }}
            />
          </Box>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            padding: "8px",
            "& .MuiListItem-root": {
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "8px",
              paddingRight: "0px",
            },
          }}
        >
          {sideBarItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.path, index)}
                sx={{
                  backgroundColor:
                    selectedIndex === index ? "white" : "transparent",
                  borderRadius: "40px",
                  marginRight: "-1px",
                  paddingRight: "24px",
                  "&:hover": {
                    backgroundColor:
                      selectedIndex === index
                        ? "white"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index
                        ? "#5D3998"
                        : item.color || "white",
                    minWidth: "36px",
                  }}
                >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    "& .MuiTypography-root": {
                      color: selectedIndex === index ? "#5D3998" : "white",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Main open={open}>
        <Box
          sx={{
            padding: open ? "1rem 1.5rem" : "0.5rem 1.5rem 1rem",
            position: "relative",
          }}
        >
          {!open && (
            <Box
              sx={{
                position: "relative",
                top: "1rem",
                paddingBottom: "1.5rem",
                left: "50%",
                marginTop: "-3.625rem",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              <img src={Logo} alt="Logo Luma" height="36" />
            </Box>
          )}
          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: open ? "0" : "24px", //
            }}
          >
            <IconButton
              sx={{
                color: "#5D3998",
                padding: "8px",
                marginLeft: "-5px",
              }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#5D3998",
              }}
            >
              Olá, Carlos
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%", padding: "0 24px" }}>
          <UserCardInfo
            name="Carlos Moraes"
            descricao="QA (Quality Assurance)"
            avatar="/images/carlos_photo.jpg"
            entradas={4}
            saida={3}
            faltas={0}
            cardWidth="100%"
            drawerOpen={open}
            drawerWidth={drawerWidth}
          />
        </Box>

        <Box
          sx={{
            width: "50%",
            padding: "0 24px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Box
            sx={{
              flex: { md: 0.2 },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          ></Box>
          <Box sx={{ marginBottom: 2 }}>
            <FrequentItems />
            <MonthlyFrequencyChart />
          </Box>
        </Box>
        <Box
          sx={{
            flex: { md: 0.4 },
            width: "100%",
            position: { md: "sticky" },
            top: 16,
            alignSelf: { md: "flex-start" },
          }}
        >
          <CalendarSection />
        </Box>
      </Main>
    </Root>
  );
}
