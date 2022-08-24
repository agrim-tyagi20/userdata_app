import React from 'react'

const userdata = ({ user, postId }) => {
    return (
        <>

            <div className="cards" key={postId}>
                <img src={user.profilePic} alt="img"></img>
                <div className="info">
                    <div className="name">
                        <p className="nameh3" style={{ marginRight: "6.9rem" }}><span style={{ fontWeight: "bold" }}>NAME - </span>{user.fname}</p>

                    </div>
                    <div className="gender">
                        <p className="gendershow"><span style={{ fontWeight: "bold" }}>GENDER - </span>{user.gender}</p>
                    </div>
                </div>
                <div className="bio">
                    <p className="biodata"><span style={{ fontWeight: "bold" }}>QUALIFICATION - </span>
                        {user.bio}
                    </p>
                </div>

            </div>


        </>
    )
}

export default userdata
