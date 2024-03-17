import Axios from "axios";
import { Link } from "react-router-dom";

function ConsumerListRow(props) {
    const { _id, Name, ID, PhoneNo, EmailID, Services,Pincode } = props.obj; 

    const handleClick = () => {
        Axios.delete("https://database-qzii.onrender.com/serRoute/delete-service/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <tr>
            <td>{Name}</td>
            <td>{ID}</td>
            <td>{PhoneNo}</td>
            <td>{EmailID}</td>
            <td>{Services}</td>
            <td>{Pincode}</td>
        </tr>
    )
}
export default ConsumerListRow;
