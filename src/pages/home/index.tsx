import Sidebar from "../../components/elements/Nav/Sidebar";
import ContentViewer from "../../components/views/ContentViewer";

const Homepage = () => {
  return (
    <div className="p-10">
      <div className="flex justify-end align-top">
        <Sidebar />
        <ContentViewer />
      </div>
    </div>
  );
};

export default Homepage;
