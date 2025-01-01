
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1242',
    template: `<div class="benchmark-component">
    <h3>Component 1242</h3>
    <button type="button" (click)="increment1242()">
      Count {{ count1242() }}
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
  export class BenchmarkNg1242 {
    count1242 = signal(0);

    increment1242() {
      this.count1242.update((count) => count + 1);
    }
  }