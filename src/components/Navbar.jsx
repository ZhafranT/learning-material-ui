import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  cancel: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            My Blog
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Blog
          </Typography>
          <div className={classes.search}>
            {/* kondisi untuk icons button seacrh di destop */}
            <Search />
            <InputBase placeholder="Search..." className={classes.input} />
            {/* kondisi untuk icons button X di mobile */}
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            {/* kondisi untuk icons button seacrh di mobile */}
            <Search className={classes.searchButton} onClick={() => setOpen(true)} />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=426&q=80" />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
