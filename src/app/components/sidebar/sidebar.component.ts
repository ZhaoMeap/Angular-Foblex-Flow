import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent{
  
  @Output() addNode = new EventEmitter<string>();
  
  addLLMNode(){
    this.addNode.emit('llm');
  }

  addReasoningNode(){
    this.addNode.emit('reasoning');
  }

  addKMNode(){
    this.addNode.emit('km');
  }

  addGatewayNode(){
    this.addNode.emit('gateway');
  }
}
