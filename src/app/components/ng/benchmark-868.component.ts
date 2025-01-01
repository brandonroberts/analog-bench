
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-868',
    template: `<div class="benchmark-component">
    <h3>Component 868</h3>
    <button type="button" (click)="increment868()">
      Count {{ count868() }}
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
  export class BenchmarkNg868 {
    count868 = signal(0);

    increment868() {
      this.count868.update((count) => count + 1);
    }
  }