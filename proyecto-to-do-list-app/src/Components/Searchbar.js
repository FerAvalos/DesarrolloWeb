import React from "react";


const Searchbar = props => {
  // (C)
  
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(list);
  

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = list.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(list);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };
  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              
              <span className="user-name">{item}</span>
              
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
};
export default Searchbar;