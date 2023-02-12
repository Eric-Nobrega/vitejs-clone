interface Props {
  title: string;
  desc: string;
  icon: string;
}

export const HeroCard = (props: Props): any => {
  return (
    <div className="rounded-xl bg-grey-800 p-4 flex gap-y-4 flex-wrap bg-hero-card shadow-xl">
      <div className="p-4 rounded-xl w-fit bg-hero-card-icon">{props.icon}</div>
      <div className="w-full font-bold">{props.title}</div>
      <div className="w-full font-[500] text-sm text-gray-400">
        {props.desc}
      </div>
    </div>
  );
};
