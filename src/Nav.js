import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        //register Nav as one of the react components on the page
        super(props);
        this.state = {
            isOpen: false
        };
        // this._toggleMenu = this._toggleMenu.bind(this); only with large applications
    }
    render() {
        return (
            this.state.isOpen ? 
                <React.Fragment>
                <a onClick={this._toggleMenu}>🍟</a>
                <ul>
                    {
                        this.props.links.map((item, index) => {
                            return <li key={index}>{item}</li>
                    })
                }
                </ul>
            </React.Fragment>
            :
            <a onClick={this._toggleMenu}>🍔</a>

        );
    }

    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled');
        });
    }
}


export default Nav;