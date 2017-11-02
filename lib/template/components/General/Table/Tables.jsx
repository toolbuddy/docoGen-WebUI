/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Table } from 'semantic-ui-react';

/* Import components */
import Tables_Header from './Tables_Header.jsx';
import Tables_Body from './Tables_Body.jsx';

/**
 * @class Tables
 * @extends {React.Component}
 */
class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let dataArr = this.props.content;
        let colSpan = [], checkColSpan = false;

        for (let i = 0; i < dataArr.length; ++i) {
            colSpan.push(dataArr[i]['value'].length + 1);
            if (i > 0) {
                if (colSpan[i-1] === colSpan[i]) {
                    checkColSpan = true;
                }
            }
        }

        if (checkColSpan === true) {
            return (
                <Table celled selectable>
                    <Tables_Header 
                        caption={this.props.caption}
                        colSpan={colSpan[0]} />
                    <Tables_Body 
                        tbody={dataArr} />
                </Table>
            );
        }
    }
}

/* Export module */
export default Tables;