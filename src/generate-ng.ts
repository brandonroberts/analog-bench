import * as fs from 'fs';
import * as path from 'path';

function generate(page: number, total: number) {
  // Create components directory if it doesn't exist
  const componentsDir = path.join(
    process.cwd(),
    'src',
    'app',
    'components',
    `ng${page}`
  );
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  // Generate {n} components
  for (let i = 1; i <= total; i++) {
    const componentContent = `
  import { Component, signal } from '@angular/core';
  
    @Component({
      selector: 'benchmark-ng-${i}',
      template: \`<div class="benchmark-component">
      <h3>Component ${i}</h3>
      <button type="button" (click)="increment${i}()">
        Count {{ count${i}() }}
      </button>
    </div>\`,
    styles: \`
    .benchmark-component {
      padding: 1rem;
      border: 1px solid #ccc;
      margin: 0.5rem;
      border-radius: 4px;
    }
    \`,
      standalone: true,
    })
    export class BenchmarkNg${i} {
      count${i} = signal(0);
  
      increment${i}() {
        this.count${i}.update((count) => count + 1);
      }
    }`;

    fs.writeFileSync(
      path.join(componentsDir, `benchmark-${i}.component.ts`),
      componentContent
    );
  }

  // Create a new index page that uses all components
  const pageContent = `
  import { Component } from '@angular/core';
  
  
  ${Array.from({ length: total }, (_, i) => i + 1)
      .map(
        (i) =>
          `import { BenchmarkNg${i} } from '../components/ng${page}/benchmark-${i}.component'`
      )
      .join(';\n')};
  
  @Component({
    imports: [
      ${Array.from({ length: total }, (_, i) => i + 1)
      .map((i) => `BenchmarkNg${i}`)
      .join(',\n')}
    ],
    template: \`<div class="benchmark-container">
      <h1>Benchmark Page</h1>
      <div class="components-grid">
        ${Array.from({ length: total }, (_, i) => i + 1)
      .map((i) => `<benchmark-ng-${i} />`)
      .join('\n      ')}
      </div>
    </div>
  \`
    })
  export default class BenchmarkPage {}
  `;

  // Create the benchmark page
  const pagesDir = path.join(process.cwd(), 'src', 'app', 'pages');
  fs.mkdirSync(pagesDir, { recursive: true });
  fs.writeFileSync(path.join(pagesDir, `benchmarkng${page}.page.ts`), pageContent);

  console.log(`Generated ${total} benchmark NG components and benchmark page`);
}

function generateRoutesFile(pages: number) {
  const pageContent = `import { Routes } from '@angular/router';
      
    export const routes: Routes = [
      ${Array.from({ length: pages }, (_, i) => i + 1)
      .map(
        (i) =>
          `{ path: '${i}', loadComponent: () => import('./pages/benchmarkng${i}.page') },`
      )
      .join('\n')}
    ];
  `;

  // Create the routes files
  const pagesDir = path.join(process.cwd(), 'src', 'app');
  fs.writeFileSync(path.join(pagesDir, `app.routes.ts`), pageContent);

  console.log(`Generated routes page`);
}

const pages = 50;
for (let i = 1; i <= pages; i++) {
  generate(i, 200);
}

generateRoutesFile(pages);
