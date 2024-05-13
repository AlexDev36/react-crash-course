import JobListings from '../components/JobListings';
import Navbar from '../components/Navbar';

const JobsPage = () => {

  return (
    <>
    <Navbar />
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings />

    </section>
    </>
  );
};
export default JobsPage;
