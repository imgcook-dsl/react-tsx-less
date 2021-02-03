'use strict';

import React, { useState, useEffect } from 'react';

import styles from './style.less';
interface Page1612337798767Props {}
const print = function(value) {
  console.log(value);
};
const Page1612337798767: React.FC<Page1612337798767Props> = ({}) => {
  const [state, setState] = useState < Array < any >> [];
  return (
    <div className={styles.box}>
      {state.data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            onClick={e => {
              window.open(item.url, '_blank');
            }}
            data-url={item.url}
            key={item.index}
          >
            <div className={styles.bd}>
              <img
                className={styles.layer}
                src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'}
                alt=""
              />
              <img className={styles.bg} src={item.coverImage} alt="" />
              <div className={styles.wrap}>
                <img
                  className={styles.riverdinwei}
                  src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  alt=""
                />
                <span className={styles.distance}>距离500m</span>
              </div>
            </div>
            <div className={styles.main}>
              <span className={styles.title}>{item.title}</span>
            </div>
            <div className={styles.ft}>
              <div className={styles.block}>
                <img
                  className={styles.xianjin}
                  src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'}
                  alt=""
                />
                <span className={styles.fashionHome}>{item.user.userName}</span>
              </div>
              {isReadCountShow(item.readCount) && (
                <div className={styles.group}>
                  <img
                    className={styles.favorite}
                    src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    alt=""
                  />
                  <span className={styles.num}>{item.readCount}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page1612337798767;
