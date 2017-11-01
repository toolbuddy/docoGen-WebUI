/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import Lists_Item from './Lists_Item.jsx';

/**
 * listParam: Define the parameter of lists
 * - animated: boolean (false)     
 * - bulleted: boolean (false) [ul]
 * - celled: boolean (false)
 * - divided: boolean (false)
 * - horizontal: boolean (false)     
 * - ordered: boolean (false) [ol]
 * - selection: boolean (false)
 * - style: object
 * - relaxed: boolean (false)
 * - type: string {'al', 'il', 'ol', 'ul'}
 */ 
const listDefaultParam = {
    bulleted: true,
    celled: false,
    divided: false,
    horizontal: false,      
    ordered: false,
    selection: false,
    style: {},
    relaxed: false,
    type: '',
}

/**
 * @class Lists
 * @extends {React.Component}
 */
class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }
    
    render() {
        let thisList = listDefaultParam;
        for (let property in this.props.listParam) {
            thisList[property] = this.props.listParam[property];
        }

        return (
            <div>
                <Lists_Item
                    bulleted={thisList.bulleted}
                    celled={thisList.celled}
                    content={this.props.content}
                    divided={thisList.divided}
                    horizontal={thisList.horizontal}
                    listType={thisList.listType}
                    ordered={thisList.ordered}
                    selection={thisList.selection}
                    style={thisList.style}
                    relaxed={thisList.relaxed} />
            </div>
        );
    }
}

/* Export module */
export default Lists;