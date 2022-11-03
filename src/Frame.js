import { Fragment, useEffect, useState } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import './Frame.css';
import utilConst from './util.const';

const { navbar: navbarItems } = utilConst;

const Frame = () => {

    // Route
    const { pathname } = useLocation();

    // State
    const [curr, setCurr] = useState('');

    useEffect(() => {

        setCurr(navbarItems.filter(({ pageKey }) => pageKey === pathname.split('/')[1])[0].name);

    }, [pathname]);

    const handleClick = (key) => setCurr(key);

    return (

        <Fragment>
            <header className="header">
                <div className="logo">
                    <img src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png" alt="Bing-logo" />
                </div>
                <div className="search">
                    <input type="text" />
                </div>
            </header>

            <main className="main">
                <nav className="nav-menu">
                    <div className="inner">
                        {
                            navbarItems.map(({ name, pageKey }, idx) => (

                                <NavLink
                                    key={idx}
                                    to={pageKey}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    {...(idx === 0) && { end: true }}
                                    onClick={() => handleClick(name)}
                                >
                                    <img src="/icon.png" alt={name} />
                                    <span>{name}</span>
                                </NavLink>

                            ))
                        }
                    </div>
                </nav>

                <section className="content">
                    <div className="content-header">
                        <h1 className="title">{curr}</h1>
                        <span>由Microsoft News支援</span>
                    </div>
                    <Outlet />
                </section>
            </main>

            <footer className="footer">
                <div className="link-to">
                    <Link to="https://www.google.com/">隱私權和 Cookie</Link>
                    <Link to="https://www.google.com/">法律聲明</Link>
                    <Link to="https://www.google.com/">廣告</Link>
                    <Link to="https://www.google.com/">關於我們的廣告</Link>
                    <Link to="https://www.google.com/">說明</Link>
                    <Link to="https://www.google.com/">意見反應</Link>
                </div>
                <div className="copyright">© 2022 Microsoft</div>
            </footer>
        </Fragment>

    );

};

export default Frame;
