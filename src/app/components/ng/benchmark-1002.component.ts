
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1002',
    template: `<div class="benchmark-component">
    <h3>Component 1002</h3>
    <button type="button" (click)="increment1002()">
      Count {{ count1002() }}
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
  export class BenchmarkNg1002 {
    count1002 = signal(0);

    increment1002() {
      this.count1002.update((count) => count + 1);
    }
  }