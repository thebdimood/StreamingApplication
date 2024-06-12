import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './sidebar/side-bar.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,FontAwesomeModule,PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

private faIconLibrary :FaIconLibrary= inject(FaIconLibrary);

  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  title = 'StreamingApplication';
}
