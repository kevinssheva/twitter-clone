import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        {/* grid-cols buat nentuin berapa banyak kolom */}
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          {/* colspan buat nentuin sebuah div memakan berapa kolom */}
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          {/* <div className="h-full bg-pink-200"></div>
          <div className="h-full bg-sky-200"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
