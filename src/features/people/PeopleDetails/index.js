import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectStatus,
    selectDetails,
    getDetailsForPerson,
} from "./peopleDetailsSlice";
import { DetailsTile } from "../../../common/Tile/index";

const PersonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);

    const details = useSelector(selectDetails);
    const status = useSelector(selectStatus);

    return (
        status === "loading" ? <div>Loading...</div>
            : status === "error" ? <div>Error!</div>
                : details ? (
                    <>
                        <DetailsTile
                            posterPath={details.profile_path}
                            title={details.name}
                            description={details.biography}
                            firstData={details.birthday}
                            secondData={details.place_of_birth}
                        />
                    </>
                ) : (
                    <div>No details available</div>
                )
    );
};

export default PersonDetails;