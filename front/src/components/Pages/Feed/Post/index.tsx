import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { postType } from "../../../../types/postType";
import { useSelector } from "react-redux";
import { StateType } from "../../../../store";
import cn from "classnames";
type propsType = {
  item: postType;
  postIndex: number;
};

export const Post: FC<propsType> = (props) => {
  const currentPost = useSelector(
    (state: StateType) => state.postReducer.currentPost
  );
  useEffect(() => console.log(currentPost), []);
  console.log(currentPost);

  return (
    <div
      className={cn({
        Post: true,
        Post__current: currentPost == props.item.id,
      })}
    >
      <div className="Post__description">
        <div className="Post__title">
          <p>{props.item.title.toUpperCase()}</p>
        </div>
        <div className="Post__body">
          <p>{props.item.body}</p>
        </div>
      </div>
    </div>
  );
};
