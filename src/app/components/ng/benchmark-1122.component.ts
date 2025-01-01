
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1122',
    template: `<div class="benchmark-component">
    <h3>Component 1122</h3>
    <button type="button" (click)="increment1122()">
      Count {{ count1122() }}
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
  export class BenchmarkNg1122 {
    count1122 = signal(0);

    increment1122() {
      this.count1122.update((count) => count + 1);
    }
  }