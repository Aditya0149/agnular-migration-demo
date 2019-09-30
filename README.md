Steps ->
1. Move into Angular
    1. npm install -g @angular/cli@latest
    2. ng new my-app
    3. Move the setup code in Angular.js application
2. Move into Typescript
    1. Add types in tsconfig.json
        "typeRoots": [
            "../node_modules/@types"
        ]
    2. rename all js files to ts files
    3. rename app.js to app.module.ts
    4. remove bower dependacies and add them using npm and load them in app.module.ts using RequireJS.
    5. also load the angular.js app files in app.module.ts and remove them from index.html.
3. Bootstrap as a hybrid application
    1. Install @angular/upgrade
    2. Import @angular/upgrade in app.module
    3. Bootstrap the angular.js app manually by implementing ngDoBootstrap method in app.module class.    