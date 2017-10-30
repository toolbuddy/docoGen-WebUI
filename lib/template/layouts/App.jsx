/* Import modules */
import React from 'react';
import { Link } from 'react-router';

/* Import Semantic-UI React components */
import { Container, Divider, Menu, Segment, Sidebar } from 'semantic-ui-react';

/* Import components */
import Sidebar_Item from '../components/Sidebar/Sidebar_Item.jsx';
import Sidebar_Header from '../components/Sidebar/Sidebar_Header.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

/* Import data */
import contentHeader from '../data/header.json';
import routes from '../data/routes.json';

/**
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        // Define state variables
        this.state = {
            visible: true,
            style: { 
                width: '70vw' 
            }
        };

        this.togglePush = this.togglePush.bind(this);
    }

    togglePush(state) {
        var toggleWidth = (this.state.visible) ? '100vw' : '70vw';
        this.setState({ 
            visible: !this.state.visible,
            style: {
                width: toggleWidth
            }
        });
    }
    
    render() {
        let dataArr = [], routesArr = [];
        Object.keys(contentHeader.data).forEach(function(key) {
            dataArr.push(contentHeader.data[key]);
        });
        Object.keys(routes.data).forEach(function(key) {
            routesArr.push(routes.data[key]);
        });

        return (
            <div>
                <Navbar push={this.togglePush} />
                <Sidebar.Pushable as={Segment} style={{ height: '100vh', margin: '2em 0 0' }}>
                    <Sidebar animation='push' as={Menu} style={{ border: 'none', borderRadius: '0', padding: '1.5em 0 0 !important' }} visible={this.state.visible} vertical width='wide'>
                        {
                            dataArr.map(function(item, i) {
                                return <Sidebar_Header
                                            title={item.title} 
                                            vers={item.vers} />
                            })
                        }
                        <Sidebar_Item chapter='Introduction' to='/' />
                        {
                            routesArr.map(function(item, i) {
                                return <Sidebar_Item
                                            chapter={item.chapter + '. ' + item.title} 
                                            to={'/' + item.route} />
                            })
                        }
                    </Sidebar>
                    <Sidebar.Pusher style={{ padding: '2em 3em 0 !important' }}>
                        <Segment basic style={this.state.style}>
                            { this.props.children }
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

/* Export module */
export default App;