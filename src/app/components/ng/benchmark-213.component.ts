
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-213',
    template: `<div class="benchmark-component">
    <h3>Component 213</h3>
    <button type="button" (click)="increment213()">
      Count {{ count213() }}
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
  export class BenchmarkNg213 {
    count213 = signal(0);

    increment213() {
      this.count213.update((count) => count + 1);
    }
  }