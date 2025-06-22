import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule,
    MatTooltipModule,
],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
projects = [
    {
      name: 'Portfolio Website',
      image: '/project1.png',
      description: 'A personal portfolio website built with Angular and Material UI to showcase my work and skills.',
      techStack: ['Angular', 'JavaScript','TypeScript', 'Material UI', 'HTML', 'CSS'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      name: 'Course Management Platform',
      image: '/project2.png',
      description: 'An online learning platform where teachers can launch courses across subjects, manage schedules, and receive student reviews. Students can enroll based on ratings and preferences, enhancing course discovery and quality.',
      techStack: ['Java','SpringBoot', 'React', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/rahulsharma128600/MajorProject'
    },
  ];

  openLiveProject(url: string) {
  if (url) {
    window.open(url, '_blank');
  }
}

}
