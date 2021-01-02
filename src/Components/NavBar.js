import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {Link} from 'react-router-dom';

const routes = [
    {text: "Home", route:"/", icon:<HomeIcon />},
    {text: "Projects", route: "/Projects", icon:<FolderOpenIcon />}
]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, 'open': open });
  };

  const list = (
    <div
    className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <List>
            {routes.map((item) => (
              <Link key={item.text} to={item.route} style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
        </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'navBar'}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'right'} open={state['open']} onClose={toggleDrawer(false)}>
            {list}
          </Drawer>
        </React.Fragment>
    </div>
  );
}