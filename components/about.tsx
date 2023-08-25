"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>معلومات عني</SectionHeading>
      <p className="mb-3">
        .أعمل علي تطوير وأطلاق البراندات علي الانترنت من خلال بناء{" "}
        <span className="font-medium">واجهات مستخدم</span> جميلة بافكار أبداعية
        <br />
        أنا ملتزم بإنشاء مواقع ويب عالية الجودة تجذب الزوار وتساعدهم على تحقيق أهدافهم{" "}
        <span className="font-medium"></span> {" "}
        <span className="italic"></span>
        <span className="underline"></span> 
        {" "}
        <span className="font-medium">
          
        </span>
        {" "}
        <span className="font-medium"> </span> 
      </p>

      <p>
      ..🖐️ <span className="italic" >يمكنني إنشاء مواقع ويب تعكس علامتك التجارية وتبرزك من بين الحشود  </span>
      <br />
        {" "}
        <span className="font-medium"></span>
        {" "}
        <span className="font-medium"></span>
       لا تردد في الاتصال بي , سأكون سعيد بمناقشة مشروعك معك وأطلاق نسخ قوية للعالم 
      </p>
    </motion.section>
  );
}
