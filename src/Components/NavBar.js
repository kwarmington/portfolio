import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';

const routes = [
    {text: "Home", route:"/"},
    {text: "Projects", route: "/Projects"}
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
            <ListItem button key={item.text}>
                <Link to={item.route} style={{ textDecoration: 'none' }}>
                    <ListItemText>{item.text}</ListItemText>
                </Link>
            </ListItem>
            ))}
        </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'navBar'}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            Menu
          </IconButton>
          <Drawer anchor={'right'} open={state['open']} onClose={toggleDrawer(false)}>
            {list}
          </Drawer>
        </React.Fragment>
    </div>
  );
}