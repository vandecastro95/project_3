import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FaceIcon from '@material-ui/icons/Face';
import Icon from '@material-ui/core/Icon';
import Money from '@material-ui/icons/Money';
import Public from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    backgroundColor: "#001f3f",
    color: "#7FDBFF"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Fab aria-label="User" className={classes.fab}>
        <Link to="/user">
          <FaceIcon />
        </Link>
      </Fab>

      <Fab aria-label="Map" className={classes.fab}>
        <Link to="/">
          <FaceIcon />
        </Link>
      </Fab>

      <Link to="/bank">
        <Fab variant="extended" aria-label="Bank" className={classes.fab}>
          Bank
        </Fab>
      </Link>
      
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
