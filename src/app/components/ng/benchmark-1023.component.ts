
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1023',
    template: `<div class="benchmark-component">
    <h3>Component 1023</h3>
    <button type="button" (click)="increment1023()">
      Count {{ count1023() }}
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
  export class BenchmarkNg1023 {
    count1023 = signal(0);

    increment1023() {
      this.count1023.update((count) => count + 1);
    }
  }