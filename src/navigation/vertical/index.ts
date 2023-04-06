// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      path: '/',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Dispatch',
      path: '/dispatch',
      icon: 'zondicons:computer-laptop',
    },
    {
      title: 'Bookings',
      icon: 'ic:baseline-content-paste',
      children: [
        {
          title: 'CRM',
          path: '#'
        },
        {
          title: 'Analytics',
          path: '#'
        },
        {
          title: 'eCommerce',
          path: '#'
        }
      ]
    },
    {
      title: 'Messaging',
      path: '#',
      icon: 'material-symbols:chat',
    },
    {
      title: 'Users',
      icon: 'material-symbols:person-outline',
      children: [
        {
          title: 'Customers',
          path: '#'
        },
        {
          title: 'Drivers',
          path: '#'
        },
        {
          title: 'Members',
          path: '#'
        }
      ]
    },
    {
      title: 'Finance',
      icon: 'mdi:dollar',
      children: [
        {
          title: 'Customers',
          path: '#'
        },
        {
          title: 'Drivers',
          path: '#'
        },
      ]
    },
    {
      path: '/',
      title: 'Knowledge Base',
      icon: 'material-symbols:menu-book'
    },
    {
      path: '/',
      title: 'Contacts',
      icon: 'material-symbols:contacts'
    },
    {
      path: '/',
      title: 'To Do',
      icon: 'material-symbols:list-alt-outline'
    },
    {
      title: 'Setting',
      icon: 'ep:setting',
      children: [
        {
          title: 'Customers',
          path: '#'
        },
        {
          title: 'Drivers',
          path: '#'
        },
      ]
    }
    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   title: 'Access Control',
    //   icon: 'mdi:shield-outline',
    // }
  ]
}

export default navigation
