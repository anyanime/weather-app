if ('serviceWorker' in navigator) {
    console.log('Yes!!!!')
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js');
        });
    }
}

