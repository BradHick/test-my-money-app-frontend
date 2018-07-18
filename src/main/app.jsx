/**
|--------------------------------------------------
| import dependencies for template
|--------------------------------------------------
*/
import '../common/template/dependencies';

/**
|--------------------------------------------------
| import modules
|--------------------------------------------------
*/
import React from 'react';

/**
|--------------------------------------------------
| import componnets
|--------------------------------------------------
*/
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';

export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
  </div>
);