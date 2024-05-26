interface TitleProps {
  title: string;
};

const Title = ({ title } : TitleProps) => {
  return <h1 className="my-4 text-[35px] font-bold">{title}</h1>
};

export default Title;