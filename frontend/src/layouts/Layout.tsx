import Footer from "../components/Footer";
import Header from "../components/Header";

//import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
   
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
     
      <div className="container mx-auto">
       
      </div>
   
     
    </div>
  );
};

export default Layout;

/*




 <SearchBar />



*/