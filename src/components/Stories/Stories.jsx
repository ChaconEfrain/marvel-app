import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../redux/action_creators";

const Stories = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories);
  useEffect(() => {
    dispatch(getStories());
  }, []);
  return <div>stories</div>;
};

export default Stories;
