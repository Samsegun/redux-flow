import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserView = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (user.loading) {
        return <h2>Loading users....</h2>;
    }

    if (user.error) {
        return <h2>{user.error}</h2>;
    }

    return (
        <div>
            <h2>List of users</h2>
            <ul>
                {user.users.map(user => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default UserView;
