import React from 'react';
import Link from '../components/global/Link'
import {
    Link as RouterLink
  } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h2 className="flex-center">
                I'm a developer, cafe owner and&nbsp;<Link text="charity founder" address="https://www.wrestlekind.org" />
            </h2>

            <div className="flex-center">
                <Link text="Twitter" address="https://twitter.com/JAStewart" />&nbsp;
                <Link text="Github" address="https://github.com/ShetlandJ" />
            </div>

            <h2 className="flex-center">Articles:</h2>

            <div className="flex-center">
                <RouterLink to="/shy-tories">Are Conservative MPs less likely to mention their political party in their Twitter bio?</RouterLink>
            </div>
        </div>
    )
}

export default Home;