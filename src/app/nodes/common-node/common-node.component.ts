import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EFConnectableSide, FFlowModule } from '@foblex/flow';

import { LlmNodeComponent } from "../../nodes/llm-node/llm-node.component";
import { KmNodeComponent } from '../../nodes/km-node/km-node.component';
import { ReasoningNodeComponent } from '../../nodes/reasoning-node/reasoning-node.component';
import { GatewayNodeComponent } from '../../nodes/gateway-node/gateway-node.component';
import { IEntitySummary } from '@foblex/ng-clarc';

@Component({
  selector: 'app-common-node',
  standalone: true,
  imports: [FFlowModule, MatIconButton, CommonModule, GatewayNodeComponent, ReasoningNodeComponent, KmNodeComponent, LlmNodeComponent, MatIconModule],
  templateUrl: './common-node.component.html',
  styleUrl: './common-node.component.css'
})
export class CommonNodeComponent {

  public eFConnectableSide = EFConnectableSide;

  public outputs: IEntitySummary<string>[] = [];

  @Output()
  public removeConnection: EventEmitter<string> = new EventEmitter<string>();

  @Input() id: number | undefined;
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() position: { x: number; y: number; } | undefined;
  @Input() type: string ='';
  @Output() delete: EventEmitter<number> = new EventEmitter();

  deleteNode(){
    this.delete.emit(this.id);
  }

  public onRemoveConnection(key: string): void {
    this.removeConnection.emit(key);
  }
}
