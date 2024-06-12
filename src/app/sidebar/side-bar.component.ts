import { Component, OnInit, inject } from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { fontAwesomeIcons } from '../shared/font-awesome-icons';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  private faIconLibrary :FaIconLibrary= inject(FaIconLibrary);
  public isCollapsed: boolean = false;

  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
 

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }


}
