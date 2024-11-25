import { FormEvent } from "react";
import { IUser } from "../Interfaces/IUser";

interface Props {
  user?: IUser;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const UserInput = ({ user, onSubmit, onCancel }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserInput;
