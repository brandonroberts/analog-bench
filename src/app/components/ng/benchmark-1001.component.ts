
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1001',
    template: `<div class="benchmark-component">
    <h3>Component 1001</h3>
    <button type="button" (click)="increment1001()">
      Count {{ count1001() }}
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
  export class BenchmarkNg1001 {
    count1001 = signal(0);

    increment1001() {
      this.count1001.update((count) => count + 1);
    }
  }