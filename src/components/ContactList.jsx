
export const ContactList = ({ contacts, searchBy, deleteItem }) => {
  const elements = contacts.filter(ele => {
    return (
      ele.name.toLowerCase().includes(searchBy.toLowerCase()) ||
      ele.number.includes(searchBy)
    );
  });

  return (
    <ul>
      {elements.map(ele => {
        return (
          <li key={ele.id} id={ele.id}>
            {ele.name + ': ' + ele.number}
            <button
              onClick={e => {
                deleteItem(e);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
