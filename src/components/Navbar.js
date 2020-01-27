import React from 'react'
import { Menu } from 'semantic-ui-react'

function Navbar() {
  const [activeItem, setActiveItem] = React.useState('home');

  return (
    <Menu fixed='top' inverted>
      <Menu.Item
        name='Home'
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')} />
      <Menu.Item
        name='About'
        active={activeItem === 'about'}
        onClick={() => setActiveItem('about')} />
    </Menu>
  )
}

export default Navbar
