import Index from './Components/Index';

const waitSeconds = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
 }
export default async function Home() {

   await waitSeconds();
  // const response = await fetch('https://dogapi.dog/api/v2/facts');
  // const data = await response.json();
  // console.log({data});
  return (
    <>
    {/* <h1 className="">Dog Fact:</h1>
    <div>{data.data[0].attributes.body}</div> */}
      <Index />
    </>
  );
}
