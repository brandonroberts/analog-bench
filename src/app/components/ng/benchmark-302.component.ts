
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-302',
    template: `<div class="benchmark-component">
    <h3>Component 302</h3>
    <button type="button" (click)="increment302()">
      Count {{ count302() }}
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
  export class BenchmarkNg302 {
    count302 = signal(0);

    increment302() {
      this.count302.update((count) => count + 1);
    }
  }