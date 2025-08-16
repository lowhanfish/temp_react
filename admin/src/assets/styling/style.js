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
    // fontSize: 11,
    // fontWeight: "bold",
    // color: "blue",
    // marginLeft : -3,
  },
  sideBarText2 : {
    // fontSize: 11,
    // fontWeight: "bold",
    // color: "blue",
    // marginLeft : -3,
  },
  sideBarText3 : {
    // fontSize: 11,
    // fontWeight: "bold",
    // color: "blue",
    // marginLeft : -3,
  },
}

export { ListItemSatu, stylex };
