
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1086',
    template: `<div class="benchmark-component">
    <h3>Component 1086</h3>
    <button type="button" (click)="increment1086()">
      Count {{ count1086() }}
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
  export class BenchmarkNg1086 {
    count1086 = signal(0);

    increment1086() {
      this.count1086.update((count) => count + 1);
    }
  }