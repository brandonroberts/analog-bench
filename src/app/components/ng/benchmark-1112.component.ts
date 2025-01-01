
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1112',
    template: `<div class="benchmark-component">
    <h3>Component 1112</h3>
    <button type="button" (click)="increment1112()">
      Count {{ count1112() }}
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
  export class BenchmarkNg1112 {
    count1112 = signal(0);

    increment1112() {
      this.count1112.update((count) => count + 1);
    }
  }