
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1009',
    template: `<div class="benchmark-component">
    <h3>Component 1009</h3>
    <button type="button" (click)="increment1009()">
      Count {{ count1009() }}
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
  export class BenchmarkNg1009 {
    count1009 = signal(0);

    increment1009() {
      this.count1009.update((count) => count + 1);
    }
  }