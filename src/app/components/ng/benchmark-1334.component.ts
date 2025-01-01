
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1334',
    template: `<div class="benchmark-component">
    <h3>Component 1334</h3>
    <button type="button" (click)="increment1334()">
      Count {{ count1334() }}
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
  export class BenchmarkNg1334 {
    count1334 = signal(0);

    increment1334() {
      this.count1334.update((count) => count + 1);
    }
  }