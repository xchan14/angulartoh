import { Component, OnInit } from '@angular/core'
import { MenuItemService } from './menu-item.service';
import { MenuItem } from './menu-item';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menus:MenuItem[] = [];

    constructor(private menuItemService: MenuItemService ) {}

    loadMenus(): void {
        this.menuItemService.getMenuItems()
            .then(m => this.menus = m);
    }
    
    ngOnInit(): void {
        this.loadMenus();
    }
}