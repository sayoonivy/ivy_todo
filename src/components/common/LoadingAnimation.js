import { tailChase } from "ldrs";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px",
  },
});

tailChase.register();

export default function LoadingAnimation({ isLoading }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} aria-live="polite" aria-busy={isLoading}>
      {isLoading && (
        <l-tail-chase size="40" speed="1.75" color="#CBC3E3"></l-tail-chase>
      )}
    </div>
  );
}
