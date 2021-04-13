import React from 'react';

const Footer = () => {
    return (
        <footer class="d-flex align-items-center justify-content-center">
            <p class="text-muted mt-3">
                Made with love by
                <a href="/https://github.com/dunleavyjack"> @jack </a>
                <span class="d-xs-inline d-s-inline d-m-inline d-lg-none d-xl-none">
                    &#127840;
                </span>
                <span class="d-none d-lg-inline">
                    {' '}
                    | If you want to support this project, buy me a &#127840;
                    <a href="https://ko-fi.com/jackjoseph"> here </a>
                    :)
                </span>
            </p>
        </footer>
    );
};

export default Footer;
