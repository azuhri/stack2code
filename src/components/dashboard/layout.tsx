import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({children} : {children: React.ReactNode}) {
    return(
        <div id="app" className="h-screen bg-white text-Quicksand">
            <Header />
            <div className="grid grid-cols-7 p-4">
                <Sidebar />
                <div className="col-span-6">
                    <div id="content" className="text-color-donker">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}