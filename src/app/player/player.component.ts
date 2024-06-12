import { Component, inject } from '@angular/core';
import { fontAwesomeIcons } from '../shared/font-awesome-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  private faIconLibrary :FaIconLibrary= inject(FaIconLibrary);

  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  
}



