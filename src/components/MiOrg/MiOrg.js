import "./MiOrg.css";

const MiOrg = ({ onClickOrg }) => {
  return (
    <section className="orgSection">
      <h3 className="title"> Mi organización </h3>{" "}
      <img
        src="/img/add.png "
        alt="
        add "
        onClick={onClickOrg}
      />{" "}
    </section>
  );
};

export default MiOrg;
