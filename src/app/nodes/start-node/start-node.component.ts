import { Component } from '@angular/core';
import { EFConnectableSide, FFlowModule } from '@foblex/flow';
import { MatIconModule } from '@angular/material/icon';

// 定義輸入項的介面
interface InputItem {
  name: string;
  type: 'String' | 'Number' | 'Boolean';
  value: string;
  description: string;
  required: boolean;
  isBuiltIn: boolean;
}

// 定義節點數據的介面
interface NodeData {
  label: string;
  description: string;
  inputs: InputItem[];
}

@Component({
  selector: 'app-start-node',
  standalone: true,
  imports: [FFlowModule, MatIconModule],
  templateUrl: './start-node.component.html',
  styleUrl: './start-node.component.css'
})
export class StartNodeComponent {

  public eFConnectableSide = EFConnectableSide;

}
