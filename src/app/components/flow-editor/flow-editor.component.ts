import { Component, Injector, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FFlowModule, FZoomDirective, FCanvasComponent, EFConnectionType, EFConnectionBehavior } from '@foblex/flow';
import { IEntitySummary } from '@foblex/ng-clarc';

import { SidebarComponent } from "../sidebar/sidebar.component";
import { MapbarComponent } from "../mapbar/mapbar.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { CommonNodeComponent } from '../../nodes/common-node/common-node.component';
import { StartNodeComponent } from '../../nodes/start-node/start-node.component';
import { EndNodeComponent } from '../../nodes/end-node/end-node.component';

import { EFlowMapActionEvent } from '../mapbar/map-action-event';

interface Node<TKey = string> extends IEntitySummary<TKey>{
  id: number;
  type: string;
  icon: string;
  title: string;
  description: string;
  position: { x: number; y: number };
  from: TKey;
  to: TKey;
}

@Component({
  selector: 'app-flow-editor',
  standalone: true,
  imports: [EndNodeComponent, StartNodeComponent, CommonNodeComponent, CommonModule, MatIconModule, FFlowModule, SidebarComponent, MapbarComponent, ToolbarComponent],
  templateUrl: './flow-editor.component.html',
  styleUrl: './flow-editor.component.css',
})

export class FlowEditorComponent {

  // --- 節點連接設定
  public connectionType: EFConnectionType = EFConnectionType.SEGMENT;
  public connectionBehavior: EFConnectionBehavior = EFConnectionBehavior.FIXED;

  // --- 畫布
  @ViewChild(FCanvasComponent, { static: false })
  public fCanvasComponent!: FCanvasComponent;

  // --- 畫布縮放事件偵測
  @ViewChild(FZoomDirective, { static: false })
  public fZoomDirective!: FZoomDirective;

  // --- 節點資料
  public nodes: Node[] = [];
  public index: string | undefined;
  private nodeIdCounter = 0;

  // 處理側邊欄的事件，根據不同節點類型來新增節點
  onAddNode(nodeType: string): void {
    const newNode: Node = {
      key: '' + this.nodeIdCounter,
      name: 'node-' + this.nodeIdCounter + '-' + this.getNodeTitle(nodeType),
      type: nodeType,
      icon: this.getNodeIcon(nodeType),
      title: this.getNodeTitle(nodeType),
      description: this.getNodeDescription(nodeType),
      position: { x: 150 + this.nodes.length * 50, y: 150 + this.nodes.length * 50 }, // 設定每個新節點的初始位置
      from: 'node-' + this.nodeIdCounter + '-' + this.getNodeTitle(nodeType),
      to: '',
      id: this.nodeIdCounter++
    };
    this.nodes.push(newNode);

    console.log('==== 節點' + newNode.id + '已經被建立！====');
    console.log('節點key：' + newNode.key);
    console.log('節點name：' + newNode.name);
    console.log('節點Icon：' + newNode.icon);
    console.log('節點類別：' + newNode.type);
    console.log('節點位置：{ X= ' + newNode.position.x + ', Y= ' + newNode.position.y + ' }');
    console.log('節點描述：' + newNode.description);
    console.log('節點連接From：' + newNode.from);
    console.log('節點連接To：' + newNode.to);
    console.log('========== 分隔線 ==========');
  }

  // 刪除節點的方法
  deleteNode(nodeId: number): void {
    this.nodes = this.nodes.filter(node => node.id !== nodeId);
  }

  // --- 寫死的節點Icon（之後可以刪除）
  private getNodeIcon(type: string): string {
    switch (type) {
      case 'llm': return 'library_books';
      case 'reasoning': return 'hub';
      case 'km': return 'psychology';
      case 'gateway': return 'sensor_door';
      default: return 'cancel';
    }
  }

  // --- 寫死的節點標題（之後可以刪除）
  private getNodeTitle(type: string): string {
    switch (type) {
      case 'llm': return 'LLM';
      case 'reasoning': return 'Reasoning';
      case 'km': return 'Knowledge';
      case 'gateway': return 'Gateway';
      default: return 'Unknown Node';
    }
  }

  // --- 寫死的節點描述（之後可以刪除）
  private getNodeDescription(type: string): string {
    switch (type) {
      case 'llm': return '呼叫大型語言模型，使用變量和提示詞生成回應。';
      case 'reasoning': return '根據狀況進行推理，並可使用 workflow 獲得精確資訊。';
      case 'km': return '在選定的知識庫中，根據輸入找出最相似的資訊提供。';
      case 'gateway': return '根據設定的條件決定流程的分支方向。';
      default: return 'No description available';
    }
  }

  // Zoom控制
  public onActionPanelEvent(event: EFlowMapActionEvent): void {
    switch (event) {
      case EFlowMapActionEvent.ZOOM_IN:
        this.fZoomDirective.zoomIn();
        break;
      case EFlowMapActionEvent.ZOOM_OUT:
        this.fZoomDirective.zoomOut();
        break;
      case EFlowMapActionEvent.FIT_TO_SCREEN:
        this.fCanvasComponent.fitToScreen();
        break;
      case EFlowMapActionEvent.RESET_SCALE_AND_CENTER:
        this.fCanvasComponent.resetScaleAndCenter();
        break;
    }
  }
}
