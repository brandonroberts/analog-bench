
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-115',
    template: `<div class="benchmark-component">
    <h3>Component 115</h3>
    <button type="button" (click)="increment115()">
      Count {{ count115() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg115 {
    count115 = signal(0);

    increment115() {
      this.count115.update((count) => count + 1);
    }
  }