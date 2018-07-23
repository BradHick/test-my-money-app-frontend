/**
|--------------------------------------------------
| Import modules
|--------------------------------------------------
*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| Import components
|--------------------------------------------------
*/
import { getList } from './billingCycleActions';


class BillingCycleList extends Component{
  
  componentWillMount() {
    this.props.getList();
  }
  
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>Nome</tr>
            <tr>Mês</tr>
            <tr>Ano</tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
