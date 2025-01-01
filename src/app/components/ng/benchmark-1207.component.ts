
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1207',
    template: `<div class="benchmark-component">
    <h3>Component 1207</h3>
    <button type="button" (click)="increment1207()">
      Count {{ count1207() }}
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
  export class BenchmarkNg1207 {
    count1207 = signal(0);

    increment1207() {
      this.count1207.update((count) => count + 1);
    }
  }