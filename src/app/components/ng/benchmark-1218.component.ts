
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1218',
    template: `<div class="benchmark-component">
    <h3>Component 1218</h3>
    <button type="button" (click)="increment1218()">
      Count {{ count1218() }}
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
  export class BenchmarkNg1218 {
    count1218 = signal(0);

    increment1218() {
      this.count1218.update((count) => count + 1);
    }
  }