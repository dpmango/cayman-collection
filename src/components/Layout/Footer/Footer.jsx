import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';

import styles from './Footer.module.scss';

const Footer = observer(({ className }) => {
  return <footer className={cns(styles.footer, className)}></footer>;
});

export default Footer;
