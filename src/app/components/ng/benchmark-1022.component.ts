
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1022',
    template: `<div class="benchmark-component">
    <h3>Component 1022</h3>
    <button type="button" (click)="increment1022()">
      Count {{ count1022() }}
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
  export class BenchmarkNg1022 {
    count1022 = signal(0);

    increment1022() {
      this.count1022.update((count) => count + 1);
    }
  }