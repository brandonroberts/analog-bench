
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-76',
    template: `<div class="benchmark-component">
    <h3>Component 76</h3>
    <button type="button" (click)="increment76()">
      Count {{ count76() }}
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
  export class BenchmarkNg76 {
    count76 = signal(0);

    increment76() {
      this.count76.update((count) => count + 1);
    }
  }