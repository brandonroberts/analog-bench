
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1394',
    template: `<div class="benchmark-component">
    <h3>Component 1394</h3>
    <button type="button" (click)="increment1394()">
      Count {{ count1394() }}
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
  export class BenchmarkNg1394 {
    count1394 = signal(0);

    increment1394() {
      this.count1394.update((count) => count + 1);
    }
  }