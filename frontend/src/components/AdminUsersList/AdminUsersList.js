import AdminUserRow from "../AdminUserRow";

const AdminUsersList = ({ users, button }) => {
    return (
        <tbody>
            <>
                {
                    users.map((user) => {
                        return <AdminUserRow key={user._id} data={user} button={button} />
                    })
                }
            </>
        </tbody>
    )
}

export default AdminUsersList;