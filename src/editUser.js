
function EditUser(props) {
    console.log(props);
    return (
        
        <h2>Edit User - {props.match.params.id}</h2>
    )
}

export default EditUser;