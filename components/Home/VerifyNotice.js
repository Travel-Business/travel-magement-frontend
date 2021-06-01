import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import VerifyFormDialog from "./VerifyFormDialog";
const useStyles = makeStyles({
  noticeContainer: {
    padding: "5% 2% 5% 2%",
  },
});
export default function VerifyFormNotice({ user }) {
  const classes = useStyles();
  const { username } = user;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <VerifyFormDialog
        handleOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
      <div className={classes.noticeContainer}>
        <Typography variant="h3">
          <b>Notice</b>
        </Typography>

        <div>
          Hello Dear DMC user <b>{username}</b>, our system indicates that you
          have not filled out the verification form yet. Please click the
          following
          <b>Verify</b> button to complete the form within 15 days. Thank you.
        </div>
        <Button onClick={handleClickOpen} color="primary" variant="contained">
          Verify
        </Button>
      </div>
    </>
  );
}
