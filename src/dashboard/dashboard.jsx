/**
|--------------------------------------------------
| Import modules
|--------------------------------------------------
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
|--------------------------------------------------
| Import components
|--------------------------------------------------
*/
import { getSummary } from '../dashboard/dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';
import { bindActionCreators } from 'redux';


class Dashboard extends Component {


  componentWillMount(){
    this.props.getSummary();
  };


  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0'/>
        <Content>
          <Row>

            <ValueBox cols='12 4' color='green' icon='bank' 
              value={`R$ ${ credit }`} text='Total de créditos'/>

            <ValueBox cols='12 4' color='red' icon='credit-card' 
              value={`R$ ${ debt }`} text='Total de débitos'/>

            <ValueBox cols='12 4' color='blue' icon='money' 
              value={`R$ ${ credit - debt }`} text='Total de Créditos'/>

          </Row>
        </Content>
      </div>
    );
  };
};

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);