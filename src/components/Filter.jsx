import { Component } from 'react';
import { ContactList } from 'components/ContactList.jsx';

export class Filter extends Component {
  state = {
    searchBy: ''
  }

constructor(){
  super();
  this.search.bind(this);
}

  search = evt =>{
    const searchBy = evt.target.value;
    this.setState(()=>({
      searchBy : searchBy
    }))
  };

  render(){
    return (
      <div>
        <h2>Contacts</h2>
        <input type="text" onChange={evt=>{
          this.search(evt)
          }} />
        <ContactList 
        contacts={this.props.contacts} 
        searchBy={this.state.searchBy} 
        deleteItem={this.props.deleteItem}/>
      </div>
    );
  }
}
