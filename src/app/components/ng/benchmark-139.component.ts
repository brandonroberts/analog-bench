
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-139',
    template: `<div class="benchmark-component">
    <h3>Component 139</h3>
    <button type="button" (click)="increment139()">
      Count {{ count139() }}
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
  export class BenchmarkNg139 {
    count139 = signal(0);

    increment139() {
      this.count139.update((count) => count + 1);
    }
  }