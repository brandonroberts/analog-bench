
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1003',
    template: `<div class="benchmark-component">
    <h3>Component 1003</h3>
    <button type="button" (click)="increment1003()">
      Count {{ count1003() }}
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
  export class BenchmarkNg1003 {
    count1003 = signal(0);

    increment1003() {
      this.count1003.update((count) => count + 1);
    }
  }