import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Grid } from "@material-ui/core";
import IntroTextSection from "./IntroTextSection";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import ChipKeywordTemplate from "./ChipKeywordTemplate";
import {
  ListItemGenerator,
  BASIC_QUESTIONS,
  COUNTRIES,
  COUNTRIES_CHECKBOX_INIT,
  SPECIALIZED_AREAS,
  SPECIALIZED_AREAS_INIT,
  DropDownGenerator,
  CheckboxesGroupGenerator,
  OPERATION_TYPE,
  STUDY_FIELDS_INIT,
  STUDY_FIELDS,
  TOPIC_SPECIALTY,
  TOPIC_SPECIALTY_INIT,
} from "./common";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  introTitle: {
    padding: "20px 20px 10px 20px",
  },
  introBodyText: {
    padding: "0 20px 0 20px",
  },
  textAreaField: {
    margin: "20px 0px 0 0px",
  },
  textAreaContainer: {
    padding: "0px 20px 0px 20px",
  },
  checkboxGroupContainer: {
    padding: "0px 20px 0px 20px",
  },
  checkboxGroup: {
    margin: "40px 0px 0px 0px",
    display: "flex",
    flexWrap: "wrap",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "45ch",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VerifyFormDialog({ open, handleClose }) {
  const classes = useStyles();
  const [fieldsStudy, setFieldsStudy] = useState(STUDY_FIELDS_INIT);
  const [topSpecialty, setTopSpecialty] = useState(TOPIC_SPECIALTY_INIT);
  const [data, updateData] = useState({});
  const [keywordTags, setKeywordTags] = useState("");
  const [proposedTripsLocations, setProposedTripsLocations] = useState(
    COUNTRIES_CHECKBOX_INIT
  );
  const [specializedArea, setSpecializedArea] = useState(
    SPECIALIZED_AREAS_INIT
  );

  function handleUpdateKeywords(data) {
    updateData({ ...data, keywordTags: data });
  }
  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }
  function onChangeProposedTripsLocations(event) {
    setProposedTripsLocations({
      ...proposedTripsLocations,
      [event.target.name]: event.target.checked,
    });
  }
  function onChangeSpecializedArea(event) {
    setSpecializedArea({
      ...specializedArea,
      [event.target.name]: event.target.checked,
    });
  }
  function onChangeFieldsStudy(event) {
    setFieldsStudy({
      ...fieldsStudy,
      [event.target.name]: event.target.checked,
    });
  }
  function onChangeTopSpecialty(event) {
    setTopSpecialty({
      ...topSpecialty,
      [event.target.name]: event.target.checked,
    });
  }
  console.log({ data });
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              DMC Partners Verification Form
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <IntroTextSection classes={classes} />
        <ListItemGenerator
          items={BASIC_QUESTIONS}
          onChange={onChange}
          classes={classes}
        />
        <DropDownGenerator
          labelText={"Where in the world do you work and operate? "}
          items={COUNTRIES}
          classes={classes}
          data={data}
          item="country"
          callback={onChange}
        />
        <DropDownGenerator
          labelText={
            "Would you like to propose trips in any of these locations? "
          }
          items={COUNTRIES}
          classes={classes}
          data={data}
          item="wouldYouProposedLocations"
          callback={onChange}
        />
        <DropDownGenerator
          labelText={"What kind of operation are you?"}
          items={OPERATION_TYPE}
          classes={classes}
          data={data}
          item="operationType"
          callback={onChange}
        />

        <div className={classes.textAreaContainer}>
          <TextField
            fullWidth={true}
            label="What city and regions do you specialize in?"
            variant="outlined"
            name="specialized"
            className={classes.textAreaField}
            multiline={true}
            inputProps={{
              maxLength: 12000,
              style: {
                resize: "vertical",
              },
            }}
            value={data["specialized"] ? data["specialized"] : ""}
            rows="7"
            onChange={onChange}
          />
        </div>
        <div className={classes.textAreaContainer}>
          <TextField
            fullWidth={true}
            label="Do you work/operate in other areas besides your base country/city?"
            variant="outlined"
            className={classes.textAreaField}
            name="operateInOtherAreas"
            multiline={true}
            inputProps={{
              maxLength: 12000,
              style: {
                resize: "vertical",
              },
            }}
            value={
              data["operateInOtherAreas"] ? data["operateInOtherAreas"] : ""
            }
            rows="7"
            onChange={onChange}
          />
          <ChipKeywordTemplate
            callBack={handleUpdateKeywords}
            keywordString={keywordTags}
          />
          <Typography>
            <b>Note:</b> please separate each keyword phrases with a colon. e.g.
            mountain cabin:art events ...
          </Typography>
          <TextField
            fullWidth={true}
            label="Any other keywords or tags you use to define/ classify your business and expertise? 
            Most Popular Trip/ Experience you sell? 
            "
            variant="outlined"
            className={classes.textAreaField}
            name="keywordTags"
            multiline={true}
            inputProps={{
              maxLength: 200,
              style: {
                resize: "vertical",
              },
            }}
            value={keywordTags}
            rows="7"
            onChange={(e) => {
              setKeywordTags(e.target.value);
            }}
          />
        </div>
        <div className={classes.checkboxGroupContainer}>
          <CheckboxesGroupGenerator
            objectBoolean={COUNTRIES_CHECKBOX_INIT}
            objectContent={COUNTRIES}
            numberOfColumns={3}
            itemTitle={
              "Would you like to propose trips in any of these locations?"
            }
            classes={classes}
            callback={onChangeProposedTripsLocations}
            state={proposedTripsLocations}
          />
          <CheckboxesGroupGenerator
            objectBoolean={SPECIALIZED_AREAS_INIT}
            objectContent={SPECIALIZED_AREAS}
            numberOfColumns={3}
            itemTitle={"What do you specialize in?"}
            classes={classes}
            callback={onChangeSpecializedArea}
            state={specializedArea}
          />
          <CheckboxesGroupGenerator
            objectBoolean={STUDY_FIELDS_INIT}
            objectContent={STUDY_FIELDS}
            numberOfColumns={3}
            itemTitle={
              "Check Box if you have relationships with partners in the following fields"
            }
            classes={classes}
            callback={onChangeFieldsStudy}
            state={fieldsStudy}
          />
          <CheckboxesGroupGenerator
            objectBoolean={TOPIC_SPECIALTY_INIT}
            objectContent={TOPIC_SPECIALTY}
            numberOfColumns={3}
            itemTitle={
              "Check all that apply What kinds of art and culture activities can you design/build relationships with?"
            }
            classes={classes}
            callback={onChangeTopSpecialty}
            state={topSpecialty}
          />
        </div>
      </Dialog>
    </div>
  );
}