import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    PdfViewerModule,
    MatIconModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = 'Rahul Sharma';
  role = 'Fullstack Developer';
  description = `
   I am a full-stack developer with 3 years of hands-on experience in building scalable and cloud-ready applications.
    My expertise lies in <strong>.NET Core, Angular, Web API, WPF,</strong> and <strong>SQL Server</strong>.
    <br><br>
    I'm passionate about developing clean, testable code and delivering impactful solutions across both frontend and backend.
    <br><br>
    Currently at Wolters Kluwer, I’ve worked extensively on a data migration platform, leveraging technologies like
    <strong>Docker, SignalR, GitHub Actions,</strong> and <strong>Azure</strong> to enable efficient <strong>CI/CD pipelines</strong> and <strong>DevOps workflows</strong>.
    <br><br>
    I enjoy working on modern architectures and cloud-native applications, with a strong focus on performance, maintainability, and seamless integration.
`;

  showPreview = false;
  pdfUrl = '/SignalR.pdf';

  downloadResume() {
  const link = document.createElement('a');
  link.href = this.pdfUrl; // or Google Drive direct link
  link.download = 'Rahul_Sharma_Resume.pdf';
  link.click();
  this.showPreview = false; // Hide preview after download
}

}
