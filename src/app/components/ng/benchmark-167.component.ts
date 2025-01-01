
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-167',
    template: `<div class="benchmark-component">
    <h3>Component 167</h3>
    <button type="button" (click)="increment167()">
      Count {{ count167() }}
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
  export class BenchmarkNg167 {
    count167 = signal(0);

    increment167() {
      this.count167.update((count) => count + 1);
    }
  }