import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
}

const Header: React.FC<IProps> = (props: IProps) => (
  <div>
    <h1>This is a Header</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
      <Link to="/players">Players</Link>
    </nav>
  </div>
);


export default Header;