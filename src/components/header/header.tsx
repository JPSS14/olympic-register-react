import {useStyles} from './header.style';

export function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <h1>Registro Olímpico</h1>
    </header>
  );
}