import { MenuItem } from './menu-item'

export const MENU: MenuItem[] = [
    { 
        id: 1,
        title: 'Heroes',
        url: '#',
        subMenus: [
            { id: 2, title: 'Heroes Dashboard', url: 'heroes/dashboard', subMenus: [] },
            { id: 3, title: 'List', url: 'heroes/', subMenus: [] }            
        ]
    },
    {
        id: 4,
        title: 'Villains',
        url: '#',
        subMenus: [
            { id: 5, title: 'Villains Dashboard', url: 'villains/dashboard', subMenus: [] },
            { id: 6, title: 'Villains', url: 'villains', subMenus: [] }
        ]
    }
];