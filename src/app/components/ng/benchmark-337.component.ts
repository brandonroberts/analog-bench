
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-337',
    template: `<div class="benchmark-component">
    <h3>Component 337</h3>
    <button type="button" (click)="increment337()">
      Count {{ count337() }}
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
  export class BenchmarkNg337 {
    count337 = signal(0);

    increment337() {
      this.count337.update((count) => count + 1);
    }
  }