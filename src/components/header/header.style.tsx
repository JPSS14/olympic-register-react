import {makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => {
    const {olympic} = theme.palette;
    return {
      root: {
        background: olympic.mainColor,
        color: olympic.white,
        padding: theme.spacing(1)
      }
    }
  }
);