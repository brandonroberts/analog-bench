
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-791',
    template: `<div class="benchmark-component">
    <h3>Component 791</h3>
    <button type="button" (click)="increment791()">
      Count {{ count791() }}
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
  export class BenchmarkNg791 {
    count791 = signal(0);

    increment791() {
      this.count791.update((count) => count + 1);
    }
  }