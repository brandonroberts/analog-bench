
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1046',
    template: `<div class="benchmark-component">
    <h3>Component 1046</h3>
    <button type="button" (click)="increment1046()">
      Count {{ count1046() }}
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
  export class BenchmarkNg1046 {
    count1046 = signal(0);

    increment1046() {
      this.count1046.update((count) => count + 1);
    }
  }