import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";

// Custom ListItem untuk sidebar
const ListItemSatu = styled(ListItem)(({ theme }) => ({
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));


const stylex = {
  sideBarText1 : {
    fontSize: 13,
    fontWeight: "bold",
    color: "#3B3B3B",
    marginLeft : -3,
  },
  sideBarText2 : {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4A4A4A",
    marginLeft : 2,
  },
  sideBarText3 : {
    fontSize: 12,
    fontWeight: "bold",
    color: "#525252",
    marginLeft : -5,
  },
}

export { ListItemSatu, stylex };
