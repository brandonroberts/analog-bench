
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1220',
    template: `<div class="benchmark-component">
    <h3>Component 1220</h3>
    <button type="button" (click)="increment1220()">
      Count {{ count1220() }}
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
  export class BenchmarkNg1220 {
    count1220 = signal(0);

    increment1220() {
      this.count1220.update((count) => count + 1);
    }
  }