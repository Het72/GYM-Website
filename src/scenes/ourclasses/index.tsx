import { SelectedPage, type ClassType } from "../../shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.avif";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";


const classes : Array<ClassType>= [
    {
        name: "Weight Training Classes",
        description: "Gain strength, muscle, and confidence through structured workouts tailored for beginners and advanced lifters alike.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Elevate your flexibility, reduce stress, and find balance with our peaceful, energizing yoga sessions.",
        image: image2,
    },
    {
        name: "Biceps Training",
        description: "Target your arms with focused exercises that build strength, definition, and serious bicep gains.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Challenge yourself, boost endurance, and enjoy fitness like never before with thrilling adventure workouts.",
        image: image4,
    },
    {
        name: "Abs Traning Classes",
        description: "Strengthen your core, tone your abs, and enhance overall stability with every intense session.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Experience full-body transformation, boosted stamina, and lasting motivation in our all-level training programs",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >

    <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
        <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
                <p className="py-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
                </p>
        </div>
    </motion.div>
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2080px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
                <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
            ))}
        </ul>
    </div>
    </motion.div>
  </section>
  );
};

export default OurClasses;