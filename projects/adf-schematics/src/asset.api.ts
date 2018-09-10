import { Tree, SchematicContext, Rule } from '@angular-devkit/schematics';

export function registerAsset(assetPath: string, assetContent: string): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        tree.create(assetPath, assetContent);
        return tree;
    };
}
