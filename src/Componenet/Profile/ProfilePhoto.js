import photo from "../../photo.jpg"

function ProfilePhoto () {
    return (
        <div style={{textAlign: "center"}}>
        <img src={photo} height={250} width={150} alt="description"/>
        </div>
    );
}

export default ProfilePhoto;