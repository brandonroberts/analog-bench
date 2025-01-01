
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-133',
    template: `<div class="benchmark-component">
    <h3>Component 133</h3>
    <button type="button" (click)="increment133()">
      Count {{ count133() }}
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
  export class BenchmarkNg133 {
    count133 = signal(0);

    increment133() {
      this.count133.update((count) => count + 1);
    }
  }