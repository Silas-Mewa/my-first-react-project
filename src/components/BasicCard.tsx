interface Props {
  title: string;
  description?: string;
  subtitle?: string;
  isSelected: boolean;
}

const BasicCard = ({
  title,
  description,
  subtitle,
  isSelected = false,
}: Props) => {
  return (
    <div className={isSelected ? "card text-bg-primary" : "card"}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default BasicCard;
