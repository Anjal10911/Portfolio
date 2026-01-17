import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card className="bg-gray-800 border border-gray-700 hover:border-red-600 transition-all duration-300 h-full">
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-red-600 p-2.5 text-white shadow-lg glow-red">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography variant="h5" className="mb-2 text-white font-bold">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-300">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
