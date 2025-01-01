
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-365',
    template: `<div class="benchmark-component">
    <h3>Component 365</h3>
    <button type="button" (click)="increment365()">
      Count {{ count365() }}
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
  export class BenchmarkNg365 {
    count365 = signal(0);

    increment365() {
      this.count365.update((count) => count + 1);
    }
  }