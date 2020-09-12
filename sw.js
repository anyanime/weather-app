
    if ('serviceWorker' in navigator) {
        console.log("yes")
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw1.js')
                .then((reg) => {
                    // registration worked
                    console.log('Registration succeeded. Scope is ' + reg.scope);
                }).catch((error) => {
                    // registration failed
                    console.log('Registration failed with ' + error);
                });
        });
    }
