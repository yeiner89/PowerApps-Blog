import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Power Platform?</h2>
        <p className="text-gray-500 my-2">Checkout the blogs</p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none" Link to="/search">
          <Link to="/search">Go to Blogs</Link>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://mercuryworks.com/wp-content/uploads/2023/06/power-platform-mobile.jpg" />
      </div>
    </div>
  );
}
