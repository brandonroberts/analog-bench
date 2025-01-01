
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-504',
    template: `<div class="benchmark-component">
    <h3>Component 504</h3>
    <button type="button" (click)="increment504()">
      Count {{ count504() }}
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
  export class BenchmarkNg504 {
    count504 = signal(0);

    increment504() {
      this.count504.update((count) => count + 1);
    }
  }