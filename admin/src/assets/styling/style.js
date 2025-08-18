import { styled, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import InputBase from "@mui/material/InputBase";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F6F9',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

const Fieldx = styled(TextField)(({theme})=>({
  backgroundColor :'#fff',
  borderRadius : 4,
  "& .MuiInputBase-input": {
    fontSize: "13px",   // ukuran teks input
    padding: "8px 10px" // padding dalam input
  }
}));
const Autocompletex = styled(Autocomplete)(({theme})=>({
  width: '100%',
    background: 'white',
    borderRadius: 4,
    "& .MuiInputBase-input": {
      fontSize: "13px",   // ukuran teks input
      padding: "6px 8px"  // padding biar lebih rapat
    }
}));


const stylex = {
  sideBarText1 : {
    fontSize: 13,
    fontWeight: "bold",
    color: "#3B3B3B",
    // marginLeft : -3,
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
    marginLeft : -1,
  },
}

export { ListItemSatu, BootstrapInput, Fieldx, Autocompletex, stylex };
