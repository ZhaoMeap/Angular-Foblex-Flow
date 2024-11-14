import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EFlowMapActionEvent } from './map-action-event';

@Component({
  selector: 'app-mapbar',
  standalone: true,
  imports: [MatTooltipModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './mapbar.component.html',
  styleUrl: './mapbar.component.css'
})
export class MapbarComponent {

  protected eEventType = EFlowMapActionEvent;

  @Output()
  private request: EventEmitter<EFlowMapActionEvent> = new EventEmitter<EFlowMapActionEvent>();

  public onClick(event: EFlowMapActionEvent): void {
    this.request.emit(event);
  }
}
