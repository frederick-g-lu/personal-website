// diagnostics.js
// Lightweight diagnostics to capture runtime errors and environment info
(function () {
    function info(msg, obj) {
        try { console.info('[diag] ' + msg, obj || ''); } catch (e) {}
    }

    function warn(msg, obj) {
        try { console.warn('[diag] ' + msg, obj || ''); } catch (e) {}
    }

    // Basic environment info
    info('Browser userAgent', navigator.userAgent);
    info('Platform', navigator.platform);
    info('Cookies enabled', navigator.cookieEnabled);
    try { info('Service worker supported', !!navigator.serviceWorker); } catch (e) {}
    try { info('SessionStorage siteStarted', sessionStorage.getItem('siteStarted')); } catch (e) {}

    // Detect Chromium vs Edge
    const ua = navigator.userAgent || '';
    if (ua.indexOf('Edg/') !== -1) {
        info('Detected browser: Edge');
    } else if (ua.indexOf('Chrome') !== -1) {
        info('Detected browser: Chrome');
    }

    // Global error handler
    window.addEventListener('error', function (event) {
        const err = event.error || {};
        warn('Uncaught error', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: err.stack || 'no stack'
        });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', function (event) {
        warn('Unhandled rejection', event.reason);
    });

    // Log loaded scripts and their src/type
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            const scripts = Array.from(document.scripts).map(s => ({ src: s.src, type: s.type || 'text/javascript' }));
            info('Loaded scripts', scripts);
            try {
                const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => ({ href: l.href, rel: l.rel, media: l.media || 'all' }));
                info('Linked stylesheets', links);
            } catch (e) {
                warn('Error reading stylesheet links', e);
            }
            try {
                const sheets = Array.from(document.styleSheets).map(s => ({ href: s.href || 'inline', rules: (s.cssRules && s.cssRules.length) ? s.cssRules.length : 0 }));
                info('Document.styleSheets', sheets);
            } catch (e) {
                warn('Error reading document.styleSheets (CORS may block access)', e);
            }
        }
    });

    // Check service workers registrations (if any)
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
        navigator.serviceWorker.getRegistrations().then(regs => {
            info('Service worker registrations', regs.map(r => ({ scope: r.scope, active: !!r.active })));
        }).catch(err => {
            warn('Error fetching SW registrations', err);
        });
    }

    // Small visual overlay when a fatal script error occurs (non-blocking)
    let overlay;
    function showOverlay(text) {
        try {
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.left = '12px';
                overlay.style.right = '12px';
                overlay.style.bottom = '12px';
                overlay.style.padding = '12px 16px';
                overlay.style.background = 'rgba(220,60,60,0.95)';
                overlay.style.color = '#fff';
                overlay.style.zIndex = 99999;
                overlay.style.borderRadius = '8px';
                overlay.style.fontFamily = 'system-ui, Arial, sans-serif';
                overlay.style.fontSize = '14px';
                overlay.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
                document.body && document.body.appendChild(overlay);
            }
            overlay.textContent = '[diag] ' + text;
            setTimeout(() => { if (overlay) overlay.remove(); overlay = null; }, 8000);
        } catch (e) {
            // ignore
        }
    }

    window.addEventListener('error', function (e) {
        showOverlay(e.message || 'Script error occurred');
    });

    window.addEventListener('unhandledrejection', function (e) {
        showOverlay('Unhandled promise: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)));
    });

})();
