import { Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  closeMegaMenu(menuElement: HTMLElement) {
    menuElement.classList.remove('show');
    
    const dropdownMenu = menuElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
      dropdownMenu.classList.add('force-hide');
      setTimeout(() => {
        dropdownMenu.classList.remove('force-hide');
      }, 300);
    }
  }
}
