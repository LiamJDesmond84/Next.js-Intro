import MainNavigation from "./MainNavigation";


function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main style={{    margin: "3rem auto",width: "90%", maxWidth: "40rem"}}>{props.children}</main>
        </div>
    );
}

export default Layout;
