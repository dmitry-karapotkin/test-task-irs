import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import { SectionContext } from '../contexts/SectionContext';


function LeftSidebar({ activeItem, onClickItem }) {
    const items = useContext(SectionContext);

    return (
      <Menu
        size="tiny"
        
        floated
        inverted
        vertical
        icon="labeled"
      >
        {Object.keys(items).map(key => {
            return (
                <Menu.Item
                  as={Link}
                  to={`/${key === 'home' ? '' : key}`}
                  key={key}
                  name={key}
                  active={activeItem === key}
                  onClick={onClickItem}
                >
                  <Icon name={items[key][1]} />
                  {items[key][0]}
                </Menu.Item>
            )
        })

        }
      </Menu>
    )
}

export default LeftSidebar;