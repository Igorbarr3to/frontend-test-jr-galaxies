import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import type { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ 
  value, 
  onChange, 
}: SearchBarProps) => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()} 
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        mb: 2
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu de busca">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={"Buscar galáxia pelo nome"}
        value={value}       
        onChange={onChange}
      />
    </Paper>
  );
};

export default SearchBar;