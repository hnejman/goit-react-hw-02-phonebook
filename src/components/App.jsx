import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts'
import { Filter } from 'components/Filter';


export class App extends Component {
  state = {
    contacts: []
  }

  createContact = evt => {
    evt.preventDefault();
    if(!this.state.contacts.filter(check=>{
      return(
      check.name.toLowerCase().includes(evt.target.childNodes[2].value.toLowerCase()) ||
      check.number.includes(evt.target.childNodes[6].value));
    }).length){
      const contact = {
        id: nanoid(),
        name: evt.target.childNodes[2].value,
        number: evt.target.childNodes[6].value,
      };
      const contacts = this.state.contacts;
      contacts.push(contact);
      this.setState({contacts: contacts})
    }else{
      alert(evt.target.childNodes[2].value + " already in contacts");
      return 0;
    }
  };

  deleteItem = e => {
    e.target.parentNode.classList.add("invisible");
    const contacts = this.state.contacts.filter(el => {
       return (el.id !== e.target.parentNode.id)}); 
      this.setState({contacts});
  };

  render() {
    return (
      <>
      <Contacts createContact={this.createContact}/>
      <Filter contacts={this.state.contacts} deleteItem={this.deleteItem}/>
      </>
    );
  }
}
