import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-full py-8 border-t">
      <div className=" w-full flex justify-center">
        <p>
          {APP_NAME} is the market leader in {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
