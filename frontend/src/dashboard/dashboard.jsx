import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './dashboardActions'
import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {view: 'cycles'}
    }

    componentWillMount() {
        this.props.getList()
        this.props.getSummary()
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
        const { view } = this.state
        const { credit, debt } = this.props.summary 
        console.log('Dashboard render view: ' + view);
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <div style={{ marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontWeight: 'bold' }}>MyMoneyApp</h3>
                    </div>
                    <div style={{ marginBottom: '20px', maxWidth: '220px' }}>
                        <select className='form-control' value={view} onChange={e => this.setState({ view: e.target.value })}>
                            <option value='cycles'>Billing Cycles</option>
                            <option value='summary'>Summary</option>
                        </select>
                    </div>

                    {view === 'cycles' ? (
                        this.renderBillingCycles()
                    ) : 
                    
                    (
                        
                            <div> 
                                <ContentHeader title='Dashboard' small='Versão 1.0' />
                                <Content>
                                    <Row> 
                                        <ValueBox cols='12 4' color='green' icon='bank'
                                            value={`R$ ${credit}`} text='Total de Créditos' />
                                        <ValueBox cols='12 4' color='red' icon='credit-card'
                                            value={`R$ ${debt}`} text='Total de Débitos' />
                                        <ValueBox cols='12 4' color='blue' icon='money'
                                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                                    </Row> 
                                </Content> 
                            </div> 
                       /* <div style={{
                            padding: '20px',
                            background: '#f5f5f5',
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}>
                            Summary simples em construção.
                        </div>*/
                    )}
                </Content> 
            </div>
        )
    }
}
//const mapStateToProps = state => ({summary: state.dashboard.summary})
//const mapStateToProps = state => ({list: state.dashboard.list})
const mapStateToProps = state => ({summary: state.dashboard.summary, list: state.dashboard.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
