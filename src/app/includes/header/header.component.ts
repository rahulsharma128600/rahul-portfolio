import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';
import { ScreenService } from '../../services/screen.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    CommonModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isSidenavOpen = false;
  sectionList : string[] = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];
  appName: string = '<rahul / sharma>';

  constructor(public screenService: ScreenService) {}

 scrollToSection(section: string) {
  const sectionId = section.toLowerCase();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isSidenavOpen = false; // close sidenav after navigation
  }
}




// ngOnInit() {
//   this.screenService.isHandset$.subscribe(val => this.isHandset = val);
// }
}
