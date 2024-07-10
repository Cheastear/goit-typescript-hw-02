import css from "./ErrorMessage.module.css";

type Prop = {
  children: React.ReactElement;
};

const ErrorMessage = ({ children }: Prop) => {
  return <p className={css.error}>{children}</p>;
};

export default ErrorMessage;
