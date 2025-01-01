
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-514',
    template: `<div class="benchmark-component">
    <h3>Component 514</h3>
    <button type="button" (click)="increment514()">
      Count {{ count514() }}
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
  export class BenchmarkNg514 {
    count514 = signal(0);

    increment514() {
      this.count514.update((count) => count + 1);
    }
  }