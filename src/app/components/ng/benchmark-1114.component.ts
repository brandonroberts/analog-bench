
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1114',
    template: `<div class="benchmark-component">
    <h3>Component 1114</h3>
    <button type="button" (click)="increment1114()">
      Count {{ count1114() }}
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
  export class BenchmarkNg1114 {
    count1114 = signal(0);

    increment1114() {
      this.count1114.update((count) => count + 1);
    }
  }