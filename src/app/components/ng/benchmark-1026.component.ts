
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1026',
    template: `<div class="benchmark-component">
    <h3>Component 1026</h3>
    <button type="button" (click)="increment1026()">
      Count {{ count1026() }}
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
  export class BenchmarkNg1026 {
    count1026 = signal(0);

    increment1026() {
      this.count1026.update((count) => count + 1);
    }
  }