
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1329',
    template: `<div class="benchmark-component">
    <h3>Component 1329</h3>
    <button type="button" (click)="increment1329()">
      Count {{ count1329() }}
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
  export class BenchmarkNg1329 {
    count1329 = signal(0);

    increment1329() {
      this.count1329.update((count) => count + 1);
    }
  }