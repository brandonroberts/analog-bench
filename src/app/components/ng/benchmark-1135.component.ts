
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1135',
    template: `<div class="benchmark-component">
    <h3>Component 1135</h3>
    <button type="button" (click)="increment1135()">
      Count {{ count1135() }}
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
  export class BenchmarkNg1135 {
    count1135 = signal(0);

    increment1135() {
      this.count1135.update((count) => count + 1);
    }
  }