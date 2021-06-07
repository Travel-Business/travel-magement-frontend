import React, { useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "../../context/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();
  const { isAuthenticated } = useContext(AppContext);
  const router = useRouter();
  function handleRedirect() {
    router.push(`/trips/${data.id}`);
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.photo[0].url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description.length > 35
              ? data.description.slice(0, 100) + "..."
              : data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          disabled={!isAuthenticated}
          size="small"
          color="primary"
          onClick={handleRedirect}
        >
          Propose Trip
        </Button>
      </CardActions>
    </Card>
  );
}
