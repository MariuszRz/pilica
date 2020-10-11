import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Draft = () => {
  const [items, setItems] = useState([]);
  const auth = useSelector((status) => status.user.auth);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/article/get.php?auth=${auth}&draft`,
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          setItems(response.items);
          console.log(items);
        }
      });
    return setItems([]);
  }, [auth]);

  if (items.length === 0) return null;
  console.log(items);
  return (
    <div>
      <p>W opracowaniu</p>
      {items.map((item) => (
        <p key={item.id}>{`${item.title} - ${item.reference}`}</p>
      ))}
    </div>
  );
};

export default Draft;
