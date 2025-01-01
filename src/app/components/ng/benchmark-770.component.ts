
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-770',
    template: `<div class="benchmark-component">
    <h3>Component 770</h3>
    <button type="button" (click)="increment770()">
      Count {{ count770() }}
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
  export class BenchmarkNg770 {
    count770 = signal(0);

    increment770() {
      this.count770.update((count) => count + 1);
    }
  }