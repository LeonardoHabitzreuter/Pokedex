import classes from './App.module.scss'
import pokeball from '@/assets/pokeball.svg';
import Text from '@mui/material/Typography';

export default function App () {
  return (    
    <main className={classes.container}>
      <img src={pokeball} alt="pokeball" />
      <Text variant='h2' fontWeight={700}>Pokedex</Text>
    </main>
  )
}
