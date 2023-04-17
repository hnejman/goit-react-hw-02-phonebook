import { Component } from 'react';

export class Filter extends Component {
  state = {
    list: [],
  };

  search = event => {
    event.preventDefault();
    const searchBy = event.target.value;
    console.log(this.props.contacts);
    const tab = this.props.contacts.filter(check => {
      console.log(check);
      return(
        check.name.toLowerCase().includes(searchBy.toLowerCase()) ||
        check.number.includes(searchBy)
      );
    });
    const list = tab.slice(0, 6);
    this.setState({ list });
  };

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={this.search} />
        <ul>
          {this.state.list.map(item => (
            <li key={item.id} id={item.id}>{item.name+": "+item.number}
              <button type='button' onClick={this.props.deleteItem}>delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
