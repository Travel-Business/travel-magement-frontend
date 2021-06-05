import { makeStyles, Theme } from "@material-ui/core/styles";

export const footerStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: "#F2F2F2",
    paddingTop: "51px",
    paddingBottom: "60px",
    color: "#4C4E4E",
    zIndex: 1000,
    position: "relative",
  },
  links: {
    display: "flex",
    marginLeft: "100px",
    marginBottom: "80px",
    "@media (max-width: 770px)": {
      display: "block",
      marginLeft: "50px",
      marginBottom: "20px",
    },
  },
  linkCol: {
    padding: "20px",
    "& a": {
      display: "block",
      textDecoration: "none",
      fontSize: "12pt",
      color: "#4C4E4E",
      lineHeight: "28px",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  linkColHeader: {
    fontSize: "18px",
    lineHeight: "22px",
    fontStyle: "normal",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#4C4E4E",
    paddingBottom: "10px",
  },
  footerDivider: {
    height: "2px",
    backgroundColor: "#4C4E4E",
    marginLeft: "30px",
    marginRight: "30px",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  footerCopyContainer: {
    fontSize: "11pt",
    width: "70%",
    display: "block",
    "& a": {
      textDecoration: "none",
      color: "#4C4E4E",
    },
    "& a:hover": {
      textDecoration: "underline",
    },
  },
  footerCopyright: {
    marginLeft: "30px",
    display: "inline-block",
    "@media (max-width: 770px)": {
      width: "100%",
    },
  },
  footerCopyrightLinks: {
    display: "inline-block",
    marginLeft: "30px",
    "& a": {
      textDecoration: "none",
      marginRight: "30px",
    },
    "@media (max-width: 770px)": {
      width: "100%",
      "& a": {
        textDecoration: "none",
      },
    },
  },
  footerSocial: {
    display: "flex",
    marginRight: "30px",
    "& a": {
      marginLeft: "20px",
    },
    "@media (max-width: 770px)": {
      display: "none",
    },
  },
  footerSocialText: {
    fontSize: "11pt",
    display: "inline-block",
    textAlign: "left",
    marginLeft: "30px",
    "@media (max-width: 770px)": {
      marginLeft: "0px",
    },
  },
  footerSocialSmall: {
    display: "none",
    "@media (max-width: 770px)": {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      "& a": {
        marginLeft: "20px",
      },
    },
  },
}));
