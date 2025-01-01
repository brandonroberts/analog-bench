
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1063',
    template: `<div class="benchmark-component">
    <h3>Component 1063</h3>
    <button type="button" (click)="increment1063()">
      Count {{ count1063() }}
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
  export class BenchmarkNg1063 {
    count1063 = signal(0);

    increment1063() {
      this.count1063.update((count) => count + 1);
    }
  }