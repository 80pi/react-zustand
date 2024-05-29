export type buttonProps = {
  clickFun: () => void;
  label?: string;
  disable?: boolean;
};

export const Button = ({ clickFun, label, disable }: buttonProps) => {
  // create own button which I can use for all the components in my code
  return (
    <button type="button" onClick={clickFun} disabled={disable}>
      {label}
    </button>
  );
};
