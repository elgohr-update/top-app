import {SearchProps} from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { KeyboardEvent, useState } from 'react';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';


export const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key == 'Enter') {
      goToSearch();
    }
  };


  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        placeholder='Поиск...'
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}
        aria-label="Найти на сайте"
      >
        <SearchIcon />
      </Button>
    </form>
  );
};