import React from 'react';
import { app } from '../../common/constants';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

export const Footer = () => (
  <LayoutContainer role="contentinfo" Tag="footer">
    <p>QuickItDotnet</p>
  </LayoutContainer>
);
/*
//(): JSX.Element => (
//    <LayoutContainer role="contentinfo" Tag="footer">
//        <p>Copyright &#xA9; {`${new Date().getFullYear()} ${app.name}`}</p>
//    </LayoutContainer>
//);
*/
