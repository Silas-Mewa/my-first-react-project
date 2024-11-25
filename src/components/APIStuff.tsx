import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import BasicCard from "./BasicCard";
import { IUser } from "../Interfaces/IUser";
import { useState } from "react";
import UserInput from "./UserInput";
import MyButton from "./MyButton";

const APIStuff = () => {
  const queryClient = useQueryClient();
  const [inEditMode, setEditMode] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(-1);

  const { data: entryData, isLoading: isLoadingEntries } = useQuery({
    queryFn: () => {
      return axios.get("http://localhost:8080/user").then((res) => res.data);
    },
    queryKey: ["myTestData"],
  });

  const createUserMutation = useMutation({
    mutationFn: (newUser: any) => {
      return axios.post("http://localhost:8080/user", {
        firstName: "test",
        lastName: "test",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myTestData"] });
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: (userId: number) => {
      return axios.delete(`http://localhost:8080/user/id/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myTestData"] });
    },
  });

  const onPressedCancel = () => {
    setEditMode(false);
  };

  const onPressedSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: any = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());
    createUserMutation.mutate(formDataObj);
    setEditMode(false);
  };

  const onPressedDelete = (userToDelete: IUser) => {
    deleteUserMutation.mutate(userToDelete.userId ?? -1);
  };

  const handleSelect = (newSelction: number) => {
    if (newSelction === selectedEntry) {
      setSelectedEntry(-1);
    } else {
      setSelectedEntry(newSelction);
    }
  };
  return (
    <>
      {inEditMode ? (
        <>
          <h2>New Entry:</h2>
          <UserInput
            onCancel={onPressedCancel}
            onSubmit={onPressedSubmit}
          ></UserInput>
          <br />
        </>
      ) : (
        <MyButton
          onButtonPressed={() => {
            setEditMode(true);
          }}
        >
          New User
        </MyButton>
      )}
      <h2>Current Entries:</h2>
      <ul className="list-group">
        {entryData?.map((user: IUser, index: number) => (
          <li
            key={user.userId}
            className="list-group-item selected"
            onClick={() => handleSelect(index)}
          >
            <BasicCard
              title={user.firstName}
              description={user.userId?.toString()}
              isSelected={selectedEntry === index}
              subtitle={user.lastName}
            ></BasicCard>

            {selectedEntry === index && (
              <MyButton
                onButtonPressed={() => {
                  onPressedDelete(user);
                }}
                color="danger"
              >
                Delete
              </MyButton>
            )}
          </li>
        ))}
      </ul>
      {/* {entryData.length === 0 && <p>No Data</p>} */}
      {isLoadingEntries && <p>Loading...</p>}
    </>
  );
};

export default APIStuff;
