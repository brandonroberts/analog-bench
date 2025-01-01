
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-716',
    template: `<div class="benchmark-component">
    <h3>Component 716</h3>
    <button type="button" (click)="increment716()">
      Count {{ count716() }}
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
  export class BenchmarkNg716 {
    count716 = signal(0);

    increment716() {
      this.count716.update((count) => count + 1);
    }
  }