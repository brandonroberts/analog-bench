
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1047',
    template: `<div class="benchmark-component">
    <h3>Component 1047</h3>
    <button type="button" (click)="increment1047()">
      Count {{ count1047() }}
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
  export class BenchmarkNg1047 {
    count1047 = signal(0);

    increment1047() {
      this.count1047.update((count) => count + 1);
    }
  }