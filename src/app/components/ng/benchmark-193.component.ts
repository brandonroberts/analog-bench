
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-193',
    template: `<div class="benchmark-component">
    <h3>Component 193</h3>
    <button type="button" (click)="increment193()">
      Count {{ count193() }}
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
  export class BenchmarkNg193 {
    count193 = signal(0);

    increment193() {
      this.count193.update((count) => count + 1);
    }
  }