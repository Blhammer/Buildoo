import AdminUserRow from "../AdminUserRow";

function AdminUsersList({ users }) {
    return (
        <tbody>
            {
                users.map((user) => {
                    return <AdminUserRow key={user._id} data={user}/>
                })
            }
        </tbody>
    )
}

export default AdminUsersList;