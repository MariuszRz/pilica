import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from 'components';
const Publish = () => {
  const [items, setItems] = useState([]);
  const auth = useSelector((status) => status.user.auth);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/article/get.php?auth=${auth}&publish`,
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          setItems(response.items);
          console.log(items);
        }
      });
    return () => {
      setItems([]);
    };
  }, [auth]);

  if (items.length === 0) return null;
  console.log(items);
  return (
    <div>
      <p>Opublikowane</p>
      {items.map((item) => (
        <ItemList key={item.id} item={item}></ItemList>
      ))}
    </div>
  );
};

export default Publish;
