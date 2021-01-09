// Import Packages
import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

// Import Material UI Components
import {makeStyles} from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Divider
} from '@material-ui/core';

// Import Icons
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  FolderOpen as FolderOpenIcon,
  LibraryBooksOutlined as BooksIcon,
  LinkedIn as LinkedInIcon
} from '@material-ui/icons';

const routes = [
  { text: "Home", route: "/", icon: <HomeIcon/> },
  { text: "Skills", route: "/Skills", icon: <BooksIcon/> },
  { text: "Projects", route: "/Projects", icon: <FolderOpenIcon/> }
]

const links = [
  { text: "LinkedIn", route: "https://linkedin.com/in/kieran-warmington", icon: <LinkedInIcon/> }
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
        {routes.map((route) => (
          <Link key={route.text} to={route.route} style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {links.map((link) => (
          <a key={link.text} href={link.route} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          </a>
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