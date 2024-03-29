import * as React from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Divider,
  List,
  Toolbar,
  Drawer,
  Box
} from '@mui/material';

const drawerWidth = 240;

interface Props {
  categories: string[];
  selectedCategory: string;
  handleCategories: (value: string) => void;
}

const Sidebar: React.FC<Props> = ({categories, selectedCategory, handleCategories}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <h3>Categories</h3>
        </Toolbar>
        <Divider />
        <List>
          {categories.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton selected = {text === selectedCategory} onClick={() => handleCategories(text)}>
              <ListItemIcon>
                  <ViewModuleIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;