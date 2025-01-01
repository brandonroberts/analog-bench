
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1202',
    template: `<div class="benchmark-component">
    <h3>Component 1202</h3>
    <button type="button" (click)="increment1202()">
      Count {{ count1202() }}
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
  export class BenchmarkNg1202 {
    count1202 = signal(0);

    increment1202() {
      this.count1202.update((count) => count + 1);
    }
  }