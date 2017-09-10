
import {MenuItem} from './menu-item'
import {MENU} from './mock-menu-items'
import { Injectable } from '@angular/core';

@Injectable()
export class MenuItemService {

    getMenuItems(): Promise<MenuItem[]> {
        return Promise.resolve(MENU);
    }

}