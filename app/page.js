import Image from "next/image";
import Slider from "./_components/Slider";
import { getSliders } from "./_utils/GlobalApi";

export default async function Home() {
  const sliderList = await getSliders();
  console.log(sliderList);
  return (
    <main className="p-5 md:p-10 px-16">
      <Slider sliderList={sliderList} />
    </main>
  );
}
