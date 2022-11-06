import React, {useState} from "react";
import profile from "../data/profile.json"
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {editProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    let [currProfile, setProfile] = useState(profile);
    const dispatch = useDispatch();
    const editClickHandler = (profile) => {
        dispatch(editProfile(profile));
    }
    return (



                <div>

                <div className="mb-4"><span className="bi bi-x-lg fw-bolder"></span>
                    <span className="fw-bolder ps-4 fs-4">Edit Profile</span>
                    <span className="p-4 small">
                        <button
                        className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold border"
                        onClick={()=>{
                            editClickHandler(currProfile);
                            // eslint-disable-next-line no-restricted-globals
                            history.back();}}>Save
                        </button>
                    </span>
                </div>
                <div className="p-1 position-relative">
                    <img height={215} src={`/img/${profile.bannerPicture}`}></img>
                    <img className="position-absolute wd-profile-pic-pos" height={100}
                         src={`/img/${profile.profilePicture}`}></img>
                </div>
                <br/><br/>
                    <div className="form-control">
                        <label className="text-secondary ps-2" htmlFor="editName">Name</label>
                        <input type="text"
                               className="form-control border-0"
                               id="editName"
                               placeholder="Name"
                               value={currProfile.fullName}
                               onChange={(val)=> setProfile({...currProfile, fullName: val.target.value})}>

                        </input>

                    </div>
            </div>

    );
};

export default EditProfileComponent;