
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1302',
    template: `<div class="benchmark-component">
    <h3>Component 1302</h3>
    <button type="button" (click)="increment1302()">
      Count {{ count1302() }}
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
  export class BenchmarkNg1302 {
    count1302 = signal(0);

    increment1302() {
      this.count1302.update((count) => count + 1);
    }
  }