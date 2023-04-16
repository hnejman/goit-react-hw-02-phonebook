import { Component } from 'react';

export class Contacts extends Component {
  state = {
    list: [],
  };

  search = event => {
    event.preventDefault();
    const searchBy = event.target.value;
    const tab = this.props.contacts.filter(check => {
      return (
        check.name.toLowerCase().includes(searchBy.toLowerCase()) ||
        check.number.toLowerCase().includes(searchBy.toLowerCase())
      );
    });
    const list = tab.slice(0, 6).map(item => `${item.name}: ${item.number}`);
    this.setState({ list });
  };

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={this.search} />
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
