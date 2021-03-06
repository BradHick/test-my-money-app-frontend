/**
|--------------------------------------------------
| Import modulea
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
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tab';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import { selectTab, showTabs } from '../common/tab/tabActions';
import { create, update } from './billingCycleActions';
import List from './billingCycleList';
import Form from './billingCycleForm';

class BillingCycle extends Component{

  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  };
  
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de pagamentos' small='Cadastro' />    
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList'/>
              <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
            </TabsHeader>
            <TabsContent>

              <TabContent id='tabList'>
                <List />
              </TabContent>

              <TabContent id='tabCreate'>
                <Form onSubmit={ this.props.create }/>
              </TabContent>

              <TabContent id='tabUpdate'>
                <Form onSubmit={ this.props.update }/>
              </TabContent>

              <TabContent id='tabDelete'>
                <h1>Excluir</h1>
              </TabContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);