import { Component } from 'react';

export class Filter extends Component {
  state = {
    list: []
  };

constructor(){
  super();
  this.search.bind(this);
}

  search(searchBy, contacts){
    contacts.filter(check => {
      console.log(check);
      return(
        check.name.toLowerCase().includes(searchBy.toLowerCase()) ||
        check.number.includes(searchBy)
      );
    })};

  render(){
    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={evt=>{
          evt.preventDefault();
          console.log(this.props.contacts);
          this.search(evt.target.value, this.props.contacts);
          }} />
        <ul>
          {this.state.list.map(item => (
            <li key={item.id} id={item.id}>{item.name+": "+item.number}
              <button type='button' onClick={this.props.deleteItem}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
