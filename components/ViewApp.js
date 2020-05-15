import React, { useState , Component } from 'react';

export default class ViewApp extends Component {

    constructor(props) {
      super(props);
    }
    render () {
        //https://qiita.com/someone7140/items/7a8d7de63be652ba90d6
        const {name} = this.props.person;
        return (
            <div>
            【名前】{name}
            </div>
        );
    }
}