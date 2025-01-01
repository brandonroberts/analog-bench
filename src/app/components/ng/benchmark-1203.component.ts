
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1203',
    template: `<div class="benchmark-component">
    <h3>Component 1203</h3>
    <button type="button" (click)="increment1203()">
      Count {{ count1203() }}
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
  export class BenchmarkNg1203 {
    count1203 = signal(0);

    increment1203() {
      this.count1203.update((count) => count + 1);
    }
  }