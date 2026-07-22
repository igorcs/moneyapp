import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getList()
    }

    sumValues(list = []) {
        return list
            .map(item => +item.value || 0)
            .reduce((total, value) => total + value, 0)
    }

    renderBillingCycles() {
        const list = this.props.list || []

        return list.map(cycle => {
            const credit = this.sumValues(cycle.credits)
            const debt = this.sumValues(cycle.debts)

            return (
                <fieldset key={cycle._id} style={{ marginBottom: '20px' }}>
                    <legend>{cycle.name} - {cycle.month}/{cycle.year}</legend>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </fieldset>
            )
        })
    }

    render() {
        console.log('dashboard list:', this.props.list)
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontWeight: 'bold' }}>Igor Carvalho</h3>
                    </div>
                    {this.renderBillingCycles()}
                </Content> 
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.dashboard.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
