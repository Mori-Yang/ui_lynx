import { root } from '@lynx-js/react';

import { App } from './App.jsx';
import { SafeArea } from './components/SafeArea/SafeArea.jsx';

root.render(
    <SafeArea style={{
        justifyContent: 'center',
        alignItems: "center",
    }}>
        <App />
    </SafeArea>
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}
