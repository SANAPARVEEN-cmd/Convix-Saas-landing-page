import dashboardImage from "../assets/dashboard.webp";
export default function Dashboard() {
  return (
    <section className="relative">
      <div className="absolute bottom-0 bg-orange-500 h-1/2 w-full -z-10 "/>
      <div className=" grid justify-items-center m-auto px-24 max-w-[90rem] py-16">
        <img src = {dashboardImage} alt = "dashboardImage" className="block w-full"/>
      </div>
    </section>
  )
}
