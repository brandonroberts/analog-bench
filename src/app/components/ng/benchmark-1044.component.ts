
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1044',
    template: `<div class="benchmark-component">
    <h3>Component 1044</h3>
    <button type="button" (click)="increment1044()">
      Count {{ count1044() }}
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
  export class BenchmarkNg1044 {
    count1044 = signal(0);

    increment1044() {
      this.count1044.update((count) => count + 1);
    }
  }