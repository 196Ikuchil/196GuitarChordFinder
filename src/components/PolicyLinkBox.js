import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

export default function PolicyLinkBox() {
  return (
    <>
      <Divider orientation="horizontal" flexItem />
      <List component="nav">
        <ListItem button component={Link} to="/policy">
          <ListItemIcon>
            <ContactSupportIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Privacy" />
        </ListItem>
      </List>
    </>
  );
}
