import clsx from "clsx";
import { motion } from "motion/react";
import { FC, ReactNode } from "react";
import { Tabs } from "renui";

import CodeDisplay from "../CodeDisplay";
import { FaCode, FaEye } from "react-icons/fa";

interface SectionProps {
  label: string;
  children: ReactNode;
  flex?: boolean;
  className?: string;
  code: string;
}

const Section: FC<SectionProps> = ({
  children,
  label,
  flex,
  className,
  code,
}) => {
  return (
    <motion.div
      initial={{
        translateY: 16,
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      className="space-y-2"
    >
      <div className="text-xl font-semibold dark:text-white transition">
        {label}
      </div>

      <Tabs
        color="primary"
        data={[
          {
            title: "Preview",
            icon: <FaEye />,
            children: (
              <div
                className={clsx(
                  flex && "flex items-center gap-3 flex-wrap",
                  className,
                )}
              >
                {children}
              </div>
            ),
          },
          {
            title: "Code",
            icon: <FaCode />,
            children: <CodeDisplay code={code} />,
          },
        ]}
      />
    </motion.div>
  );
};

export default Section;
