import * as React from 'react';
import _ from 'lodash';
import { Box, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    searchText: string;
    sortBy: string;
    handleSearch: () => void;
    handleSearchChange: (value: string) => void;
    handleSortBy: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({searchText, sortBy, handleSearch, handleSearchChange, handleSortBy}) => {

  return (
    <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="search">Search</InputLabel>
                    <OutlinedInput
                        id="search"
                        type={'text'}
                        value={searchText}
                        onChange={(event) => handleSearchChange(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="search"
                                onClick={() => handleSearch()}
                                onMouseDown={() => console.log('')}
                                edge="end"
                                >
                                    <SearchIcon fontSize='large' />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="search"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label="Sort By"
                        onChange={(event) => handleSortBy(event.target.value as string)}
                    >
                        <MenuItem value={'title'}>title</MenuItem>
                        <MenuItem value={'description'}>description</MenuItem>
                        <MenuItem value={'category'}>category</MenuItem>
                        <MenuItem value={'price'}>price</MenuItem>
                        <MenuItem value={'stock'}>stock</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </Box>
  );
}

export default SearchBar;