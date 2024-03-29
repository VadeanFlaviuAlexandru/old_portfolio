import './Work.scss'
import bootstrap from "../../assets/bootstrap.png"
import css from "../../assets/css.png"
import sass from "../../assets/sass.png"
import mui from "../../assets/mui.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const proficient = () => {
  return (
    <List sx={{ width: '100%', minWidth: 150, bgcolor: 'background.paper' }} className='ListBackground'>
      <ListItem className='ListBackground'>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={css} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="CSS" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={bootstrap} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bootstrap" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={sass} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sass" />
      </ListItem>
      <ListItem className='ListBackground'>
        <ListItemAvatar>
          <Avatar className='ImageBackground'>
            <img src={mui} alt={'language icon'} className="image" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Material-UI" />
      </ListItem>
    </List>
  );
};

export default proficient;