import { motion } from "framer-motion";
import { SelectValue } from "@radix-ui/react-select";
import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Feature } from "./components/Features";
import { Hero2 } from "./components/Hero2";
import Nav from "./components/Nav";
import { Button } from "./components/ui/button";
import { DatePicker } from "./components/ui/datePicker";
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./components/ui/select";
import { AudioLines } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Hero1 } from "./components/Hero1";
import { Destinations1 } from "./components/Destinations1";
import { Destinations2 } from "./components/Destinations2";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import { Newsletter } from "./components/NewsLetter";

const App = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      <div className="fixed right-0 bottom-0 z-50 p-6">
        <img src="whatsapp-logo.png" alt="" className="w-20 cursor-pointer hover:scale-110 transition-all" />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="min-w-[70%] min-h-[65%]">
          <ContactForm />
        </DialogContent>
      </Dialog>
      <div className="overflow-x-hidden relative flex flex-col items-center justify-center">
        {/* Animated Images */}
        <motion.img
          src="tour5.png"
          className="absolute sm:w-3/12 w-10/12 rounded-md -rotate-[60deg]"
          initial={{ opacity: 0, rotate: -80, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -60, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          alt=""
        />
        <motion.img
          src="tour2.png"
          className="absolute sm:w-3/12 w-10/12 rounded-md rotate-[45deg]"
          initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 45, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          alt=""
        />
        <motion.img
          src="tour1.png"
          className="absolute sm:w-3/12 w-10/12 rounded-md"
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          alt=""
        />

        <div className="w-full h-screen flex flex-col relative">
          <div className="w-full p-3">
            <Nav />
          </div>
          <div className="grow flex flex-col gap-8 items-center justify-center">
            <p className="text-7xl font-garamond">Escape'n Fly</p>
            <div className="flex gap-2">
              <Button>Get Your Itinerary</Button>
              <Button variant={"secondary"}>See Plans</Button>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="border rounded-md w-11/12 sm:w-5/12 glass">
                <Input className="border-0 p-6" placeholder="Where you wanna go?" />
                <Separator />
                <div className="flex items-center justify-between gap-2 p-2">
                  <div className="flex sm:flex-row flex-col gap-2">
                    <DatePicker />
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size={"sm"}>
                    <AudioLines />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Destinations2 />
      <Destinations1 />
      <Hero1 />
      <Hero2 />
      <Newsletter />
      <Faq />
      <Feature />
      <Cta />
    </div>
  );
};

export default App;
