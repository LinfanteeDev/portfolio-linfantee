import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  copiedField: string | null = null;

  copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedField = field;
      setTimeout(() => this.copiedField = null, 2000);
    });
  }
}