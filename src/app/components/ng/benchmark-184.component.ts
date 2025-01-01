
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-184',
    template: `<div class="benchmark-component">
    <h3>Component 184</h3>
    <button type="button" (click)="increment184()">
      Count {{ count184() }}
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
  export class BenchmarkNg184 {
    count184 = signal(0);

    increment184() {
      this.count184.update((count) => count + 1);
    }
  }