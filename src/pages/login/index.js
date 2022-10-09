const Home = () => {
  return <div className="bg-red-400">This is Login page</div>;
};
// Home.getLayout = page => <BlankLayout>{page}</BlankLayout>
Home.guestGuard = true;

export default Home;
