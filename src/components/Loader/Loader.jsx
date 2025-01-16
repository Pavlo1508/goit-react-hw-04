import { Grid } from "react-loader-spinner";
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Grid
        visible={true}
        height="90"
        width="90"
        color="#0000CD"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loader;