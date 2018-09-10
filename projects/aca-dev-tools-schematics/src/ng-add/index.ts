import { Rule, chain } from '@angular-devkit/schematics';
import { registerModule, registerAsset } from '@alfresco/adf-schematics';

export function ngAdd(): Rule {
    return chain([
        registerModule(
            '/src/app/app.module.ts',
            'AcaDevToolsModule',
            'aca-dev-tools',
            'AcaDevToolsModule'
        ),
        registerAsset('hello.txt', 'hello there!')
    ]);
}
