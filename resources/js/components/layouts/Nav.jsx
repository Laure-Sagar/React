import React from "react";
function Nav() {
    return (
        <>
            <nav className="fex flex-row justify-between">
                <div className="flex-auto">
                    <a className="font-mono text-lg" href="#">
                        Books
                    </a>
                </div>
                <div className="flex-auto">
                    <img
                        src="./graphics/profile.jpg"
                        alt=""
                        className="rounded-full h-6 w-6"
                    />
                </div>
            </nav>
        </>
    );
}
export default Nav;
