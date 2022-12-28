import React from 'react';
/**
 * This file will hold a component you will be using to apply reusable styling to the other components
 */

const Container = ({ children }) => (
  <div style={styles.container}>{children}</div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '50px 100px',
    //   backgroundColor: 'black',
  },
};

export default Container;
