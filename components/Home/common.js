import {
  Typography,
  Divider,
  Grid,
  TextField,
  List,
  ListItem,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";

export const BASIC_QUESTIONS = [
  {
    label: "Name of Your Organization:",
    name: "organizationName",
    placeholder: "name",
  },
  {
    type: "number",
    label: "Phone Number:",
    name: "phone",
    placeholder: "000-000-0000",
  },
  {
    type: "string",
    label: "Email:",
    name: "email",
    placeholder: "example@gmail.com",
  },
  {
    type: "string",
    label: "Website:",
    name: "website",
    placeholder: "www.example.com",
  },
  {
    type: "string",
    label: "Contact Person:",
    name: "contact",
    placeholder: "contact",
  },
  { type: "string", label: "Role:", name: "role", placeholder: "e.g manager" },
];

export const SPECIALIZED_AREAS_INIT = {
  arts: false,
  luxuryTours: false,
  culturalImmersions: false,
  history: false,
  familyVacations: false,
  learningVacations: false,
  leisure: false,
  specialInterest: false,
  businessTravel: false,
  families: false,
  romantic: false,
  smallGroups: false,
  largeGroups: false,
  specialEvents: false,
  universitySchoolGroups: false,
  riverCruises: false,
  jetCharters: false,
  sustainableTravel: false,
  regenerativeTavel: false,
  bespoke: false,
  other: false,
};

export const SPECIALIZED_AREAS = {
  arts: "The arts",
  luxuryTours: "Luxury tours",
  culturalImmersions: "Cultural immersions",
  history: "History",
  familyVacations: "Family Vacations",
  learningVacations: "Learning Vacations",
  other: "Other",
  leisure: "Leisure",
  specialInterest: "Special interest",
  businessTravel: "Business Travel ",
  families: "Families",
  romantic: "Romantic",
  smallGroups: "Small Groups",
  largeGroups: "Large Groups",
  specialEvents: "Special Events",
  universitySchoolGroups: "University/ School Groups",
  riverCruises: "River Cruises",
  jetCharters: "Jet Charters",
  sustainableTravel: "Sustainable Travel",
  regenerativeTavel: "Regenerative Tavel",
  bespoke: "Bespoke",
};

export const COUNTRIES_CHECKBOX_INIT = {
  italy: false,
  france: false,
  greece: false,
  mexico: false,
  india: false,
  spain: false,
  japan: false,
  morocco: false,
  bali: false,
  england: false,
  ireland: false,
  croatia: false,
  hungary: false,
  slovenia: false,
  greece: false,
  iceland: false,
  argentina: false,
  hongKong: false,
  australia: false,
  scandinavia: false,
  other: false,
};

export const COUNTRIES = {
  italy: "Italy",
  france: "France",
  greece: "Greece",
  mexico: "Mexico",
  india: "India",
  spain: "Spain",
  japan: "Japan",
  morocco: "Morocco",
  bali: "Bali",
  england: "England",
  ireland: "Ireland",
  croatia: "Croatia",
  hungary: "Hungary",
  slovenia: "Slovenia",
  greece: "Greece",
  iceland: "Iceland",
  argentina: "Argentina",
  hongKong: "Hong Kong",
  australia: "Australia",
  scandinavia: "Scandinavia",
  other: "Other (write in)",
};

export const OPERATION_TYPE = {
  dmc: "Destination Management",
  hotelAccommodation: "Hotel / Accommodation",
  retreat: "Retreat",
  restaurant: "Restaurant",
  school: "School",
  outdoorActivity: "Outdoor activity",
  transportation: "Transportation ",
  travelRentals: "Travel rentals",
  logistics: "Logistics (i.e. insurance/visas/security)",
  other: "Other",
};

export const TOPIC_SPECIALTY_INIT = {
  architectureHistory: false,
  culinary: false,
  artDesign: false,
  localMakers: false,
  historyOfArtists: false,
  floral: false,
  vrTech: false,
  econnomics: false,
  photography: false,
  wellnessBeauty: false,
  luxury: false,
  fashionDesign: false,
  culturalEvent: false,
  opera: false,
  music: false,
  other: false,
};

export const TOPIC_SPECIALTY = {
  architectureHistory: "Architecture and History ",
  culinary: "Culinary/ Food / Wine ",
  artDesign: "Art and Design - Museums History Famous Movements",
  localMakers: "Local Makers / Art Design",
  historyOfArtists:
    "History of Famous Artists- VIsits to local sites Fashion / Design",
  floral: "Floral / Scent",
  vrTech: ":VR / Tech",
  econnomics: "Econnomics / HIstory",
  photography: "Photography",
  wellnessBeauty: "Wellness/ Beauty",
  luxury: "Luxury ",
  fashionDesign: "Fashion / Design Week ",
  culturalEvent: "Cultural Event",
  opera: "Opera / Performance",
  music: "Music ",
  other: "Other",
};

export const STUDY_FIELDS_INIT = {
  artAndCultureDrawing: false,
  paintingArchitecture: false,
  sculpture: false,
  graphicDesignPrintmaking: false,
  CreativeWriting: false,
  artisans: false,
  photography: false,
  film: false,
  theatre: false,
  performance: false,
  textiles: false,
  fashion: false,
  music: false,
  composition: false,
  culinar: false,
  wellness: false,
  stylingBeauty: false,
  fitnes: false,
  other: false,
};

export const STUDY_FIELDS = {
  artAndCultureDrawing: "Art and Culture Drawing ",
  paintingArchitecture: "Painting Architecture ",
  sculpture: "Sculpture ",
  graphicDesignPrintmaking: "Graphic Design / Printmaking ",
  CreativeWriting: "Creative Writing ",
  artisans: "Artisans ",
  photography: "Photography ",
  film: "Film ",
  theatre: "Theatre ",
  performance: "Performance ",
  textiles: "Textiles ",
  fashion: "Fashion ",
  music: "Music ",
  composition: "Composition ",
  culinar: "Culinary",
  wellness: "Wellness",
  stylingBeauty: "Styling Beauty",
  fitnes: "Fitness",
  other: "Other",
};

export function ListItemGenerator({ onChange, classes, items }) {
  const FinalList = items.map((item, index) => {
    return (
      <Grid key={index} item md={3} xs={3}>
        <ListItem>
          {/* <ListItemText primary="Trip Queston One" /> */}

          <TextField
            id={item.name}
            label={item.label}
            type={item.type}
            name={item.name}
            onChange={onChange}
            placeholder={item.placeholder}
            className={classes.textField}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </ListItem>
      </Grid>
    );
  });
  return (
    <List>
      <Grid container>{FinalList}</Grid>
    </List>
  );
}

export function DropDownGenerator({
  items,
  labelText,
  classes,
  data,
  item,
  callback,
}) {
  const Item = Object.keys(items).map((item, index) => {
    return (
      <MenuItem key={index} value={items[item]}>
        {items[item]}
      </MenuItem>
    );
  });

  return (
    <div style={{ padding: "0px 20px 20px 20px" }}>
      <InputLabel style={{ padding: "0px 0px 20px 5px" }} id="label">
        {labelText}
      </InputLabel>
      <Select
        name={item}
        className={classes.textField}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data[item] ? data[item] : ""}
        onChange={callback}
      >
        {Item}
      </Select>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//       display: 'flex',
//   },
//   formControl: {
//       margin: theme.spacing(3),
//   },
// }));

const CheckBoxs = (state, ObjectContents, callback, numberOfColumns) => {
  const checkboxGroup = Object.keys(state).map((item, index) => (
    <Grid key={index} item xs={numberOfColumns}>
      <FormControlLabel
        control={
          <Checkbox checked={state[item]} onChange={callback} name={item} />
        }
        label={ObjectContents[item]}
      />
    </Grid>
  ));
  return (
    <FormGroup>
      <Grid container spacing={2}>
        {checkboxGroup}
      </Grid>
    </FormGroup>
  );
};

export function CheckboxesGroupGenerator({
  callback,
  state,
  numberOfColumns,
  itemTitle,
  objectContent,
  objectBoolean,
  classes,
}) {
  // console.log(itemTitle, objectBoolean, objectContent, 'test 38');
  // const classes = useStyles();
  // const [state, setState] = React.useState(objectBoolean);

  // const handleChange = (event) => {
  //     console.log(event.target.name, event.target.checked, 'test check 49');
  //     setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div className={classes.checkboxGroup}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{itemTitle}</FormLabel>
        {CheckBoxs(state, objectContent, callback, numberOfColumns)}
      </FormControl>
    </div>
  );
}
