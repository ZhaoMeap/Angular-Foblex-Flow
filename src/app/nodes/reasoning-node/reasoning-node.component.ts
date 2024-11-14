import { Component } from '@angular/core';
import { FFlowModule } from '@foblex/flow';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reasoning-node',
  standalone: true,
  imports: [MatIconModule, FFlowModule],
  templateUrl: './reasoning-node.component.html',
  styleUrl: './reasoning-node.component.css'
})
export class ReasoningNodeComponent {

}
