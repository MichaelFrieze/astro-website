import { useState } from 'react';

function Showcase() {
  const [name, setName] = useState('John Doe');

  return <div>Hello {name}</div>;
}

export default Showcase;
