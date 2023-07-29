import { Button, Dropdown } from 'antd';

export default function dropdown() {

    const items = [
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];


  return (
    
    <Dropdown
    menu={{
      items,
    }}
    placement="bottomLeft"
    arrow
  >
    <Button>bottomLeft</Button>
  </Dropdown>
  )
}
