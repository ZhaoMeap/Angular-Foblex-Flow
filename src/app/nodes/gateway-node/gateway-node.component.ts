import { Component } from '@angular/core';
import { FFlowModule } from '@foblex/flow';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gateway-node',
  standalone: true,
  imports: [MatIconModule, FFlowModule],
  templateUrl: './gateway-node.component.html',
  styleUrl: './gateway-node.component.css'
})
export class GatewayNodeComponent{
  
}
