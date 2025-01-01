
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1201',
    template: `<div class="benchmark-component">
    <h3>Component 1201</h3>
    <button type="button" (click)="increment1201()">
      Count {{ count1201() }}
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
  export class BenchmarkNg1201 {
    count1201 = signal(0);

    increment1201() {
      this.count1201.update((count) => count + 1);
    }
  }