import { Component } from '@angular/core';
import { FFlowModule } from '@foblex/flow';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-km-node',
  standalone: true,
  imports: [MatIconModule, FFlowModule],
  templateUrl: './km-node.component.html',
  styleUrl: './km-node.component.css'
})
export class KmNodeComponent {

}
