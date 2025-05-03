import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Entities/User';
@Component({
  selector: 'app-client-agent-view',
  imports: [CommonModule],
  templateUrl: './client-agent-view.component.html',
  styleUrl: './client-agent-view.component.css'
})
export class ClientAgentViewComponent implements OnInit {
  agents: User[]=[];

  // Group agents into sets of 3 for carousel slides
  agentGroups: any[] = [];
  
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        if (response && Array.isArray(response)) {
          this.agents = response.filter((agent) => agent.roles?.includes('AGENT'));
          this.agentGroups = this.chunkArray(this.agents, 3); // ✅ Chunk after data is set
        } else {
          console.error('Unexpected API response:', response);
        }
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
  chunkArray(arr: User[], size: number) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

}
