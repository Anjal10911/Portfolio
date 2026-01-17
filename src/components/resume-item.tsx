import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border-l-4 border-red-600 hover:border-red-500 transition-all duration-300">
      <Card
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg bg-red-600 border-none"
      >
        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
      </Card>
      <div className="w-full font-normal !text-gray-300">
        {children}
      </div>
    </div>
  );
}

export default ResumeItem;
