import { ComponentProps } from "../../Interfaces/Components";

const PageContainer = ({ children }: ComponentProps) => {
  return (
    <>
      <div className="PageContainer">{children}</div>
    </>
  );
};

export default PageContainer;
