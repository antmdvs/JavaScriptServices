import './css/site.css';
import * as ko from 'knockout';
import { createHistory } from 'history';
import './webpack-component-loader';

// Load and register the <app-root> component
ko.components.register('app-root', require('./components/app-root/app-root').default);

// Tell Knockout to start up an instance of your application
ko.applyBindings({ history: createHistory() });

// Basic hot reloading support. Automatically reloads and restarts the Knockout app each time
// you modify source files. This will not preserve any application state other than the URL.
declare var module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => ko.cleanNode(document.body));
}
