import { Card, makeStyles, CardMedia, CardContent, CardActionArea, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="My Post"
            image="https://images.unsplash.com/photo-1641659736749-8bbae305e475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio harum vitae nobis delectus quam qui. Adipisci, voluptates possimus? Distinctio modi enim sunt.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus distinctio harum vitae nobis delectus quam qui. Adipisci, voluptates possimus? Distinctio modi enim sunt.{' '}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <Button variant="text" color="primary" size="small">
            Share
          </Button>
          <Button variant="text" color="primary" size="small">
            Learn More
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Post;
