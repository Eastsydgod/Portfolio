import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BuildIcon from '@mui/icons-material/Build'
import CodeIcon from '@mui/icons-material/Code'
import Ham from './Ham'
import { Style } from './NavStyle.js'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '250px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Style>
        <List className="list">
          {[
            { name: 'Home', icon: <HomeIcon />, link: '#Home' },
            { name: 'About', icon: <AccountBoxIcon />, link: '#About' },
            { name: 'Services', icon: <BuildIcon />, link: '#Services' },
            { name: 'Technology', icon: <CodeIcon />, link: '#Technology' },
          ].map((item, i) => (
            <ListItem button key={i} className="listitem">
              <a href={item.link} className="Link">
                <ListItemIcon>{item.icon} </ListItemIcon>
                <ListItemText primary={item.name} className="text" />
              </a>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className="list">
          {[
            { name: 'Why Choose Me', icon: <MailIcon />, link: '#Reason' },
            { name: 'Testimonial', icon: <MailIcon />, link: '#Reason' },
          ].map((item, i) => (
            <ListItem button key={i} className="listitem">
              <a href={item.link} className="Link">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} className="text" />
              </a>
            </ListItem>
          ))}
        </List>
      </Style>
    </Box>
  )

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Ham />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
