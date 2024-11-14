import { Component } from '@angular/core';
import { FlowEditorComponent } from './components/flow-editor/flow-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlowEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-DAS-Lion';
}
