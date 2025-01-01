
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-696',
    template: `<div class="benchmark-component">
    <h3>Component 696</h3>
    <button type="button" (click)="increment696()">
      Count {{ count696() }}
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
  export class BenchmarkNg696 {
    count696 = signal(0);

    increment696() {
      this.count696.update((count) => count + 1);
    }
  }