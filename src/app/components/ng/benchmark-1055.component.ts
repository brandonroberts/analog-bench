
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1055',
    template: `<div class="benchmark-component">
    <h3>Component 1055</h3>
    <button type="button" (click)="increment1055()">
      Count {{ count1055() }}
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
  export class BenchmarkNg1055 {
    count1055 = signal(0);

    increment1055() {
      this.count1055.update((count) => count + 1);
    }
  }