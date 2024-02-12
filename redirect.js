document.addEventListener('DOMContentLoaded', redirect);

function redirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const appScheme = 'butterflyfinance://plaid/callback';
    const queryString = Array.from(urlParams.entries())
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    const redirectUrl = `${appScheme}${queryString ? '?' + queryString : ''}`;
    window.location.replace(redirectUrl);
}
