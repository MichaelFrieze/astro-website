import { useState } from 'react';

function ReactExample() {
  const [name, setName] = useState('John Doe');

  return <div>Hello {name}</div>;
}

export default ReactExample;
