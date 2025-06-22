import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Wolters Kluwer',
      role: 'Full Stack Developer',
      duration: 'Dec 2022 – Present',
      // description: `Led the development of a scalable data migration platform using .NET Core, WPF, Angular, Azure, Docker, and GitHub Actions. Emphasized clean, testable code and CI/CD Workflows.`
      experienceList : [
        'Led the development of a cloud-based data migration platform.',
        'Built REST APIs with .NET Core and Angular UI with NgRx state management.',
        'Created a WPF-based data extraction tool for legacy database systems.',
        'Used Azure Functions, SignalR & Service Bus for cloud data flow.',
        'Implemented CI/CD workflows using GitHub Actions and Docker.',
        'Enhanced productivity by using GitHub Copilot and ChatGPT for rapid dev.',
        'Deployed scalable and secure apps using Azure App Services and Key Vault.',
        'Reduced deployment time by 70% and improved migration speed 2x.'
      ]
    },
  ];
}
