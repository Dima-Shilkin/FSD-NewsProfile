import styles from "./styles.module.css";
// import { User } from "../../interfaces";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard } from "@/entities/profile";
import Loader from "@/shared/ui/Loader/Loader";
import { fetchProfile } from "@/entities/profile/api/profileApi";
import { AppDispatch } from "@/app/appStore";
import { Status } from "@/shared/interfaces";
import { selectProfile } from "@/entities/profile/api/selector";

export const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { profileData, statusLoading, statusError } =
    useSelector(selectProfile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (statusError) {
    return <p>{statusError}</p>;
  }

  return (
    <div className={styles.сonteiner}>
      <h2>Данные вашего профиля</h2>
      {statusLoading === Status.LOADING ||
      !profileData?.address?.city ||
      !profileData?.address?.street ? (
        <Loader />
      ) : (
        <ProfileCard
          name={profileData.name}
          email={profileData.email}
          phone={profileData.phone}
          city={profileData.address.city}
          street={profileData.address.street}
        />
      )}
    </div>
  );
};
