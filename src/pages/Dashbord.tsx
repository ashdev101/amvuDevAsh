
import "react-circular-progressbar/dist/styles.css";
import FloatingButton from "../components/Dashboard/FloatingButton";
import Header from "../components/Dashboard/Header";
import LeftPanel from "../components/Dashboard/LeftPanel";
import RightPanel from "../components/Dashboard/RightPanel";

/**
 * Renders the Dashboard component.
 * 
 * @returns {JSX.Element} The rendered Dashboard component.
 */
function Dashboard(): JSX.Element {
  return (
    <main className='flex flex-col bg-[#F5F7FA]'>
      <Header />

      <div className='flex flex-col lg:flex-row gap-4 mt-12 sm:mt-0'>
        {/* 
        <section className='flex pt-20'>
          <div className='flex flex-row lg:flex-col items-center gap-3 w-[50px] border-[#EDEFF2]'>
            <img src="reader-outline.png" alt="profile" className='w-[24px] h-[24px]' />
            <img src="cloud-upload-outline.png" alt="profile" className='w-[24px] h-[24px]' />
            <img src="navigate-outline.png" alt="profile" className='w-[24px] h-[24px]' />
            <img src="reader-outline.png" alt="profile" className='w-[24px] h-[24px]' />
          </div>
          //test react 
        </section> 
        */}
        <FloatingButton />

        <LeftPanel />

        <RightPanel />
        
      </div>
    </main>
  );
}

export default Dashboard;