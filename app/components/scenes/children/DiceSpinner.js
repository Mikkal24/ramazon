import React, { Component } from "react";
import styles from "./styles.less";

class DiceSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.platform}>
          <div className={styles.diceWrapper}>
            <div className={[styles.dice]}>
              <div className={[styles.side, styles.front].join(" ")}>
                <div className={[styles.dot, styles.center].join(" ")} />
              </div>
              <div
                className={[styles.side, styles.front, styles.inner].join(" ")}
              />
              <div className={[styles.side, styles.top].join(" ")}>
                <div
                  className={[styles.dot, styles.dtop, styles.dleft].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dright].join(
                    " "
                  )}
                />
              </div>
              <div
                className={[styles.side, styles.top, styles.inner].join(" ")}
              />
              <div className={[styles.side, styles.right].join(" ")}>
                <div
                  className={[styles.dot, styles.dtop, styles.dleft].join(" ")}
                />
                <div className={[styles.dot, styles.center].join(" ")} />
                <div
                  className={[styles.dot, styles.dbottom, styles.dright].join(
                    " "
                  )}
                />
              </div>
              <div
                className={[styles.side, styles.right, styles.inner].join(" ")}
              />
              <div className={[styles.side, styles.left].join(" ")}>
                <div
                  className={[styles.dot, styles.dtop, styles.dleft].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dtop, styles.dright].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dleft].join(
                    " "
                  )}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dright].join(
                    " "
                  )}
                />
              </div>
              <div
                className={[styles.side, styles.left, styles.inner].join(" ")}
              />
              <div className={[styles.side, styles.bottom].join(" ")}>
                <div className={[styles.dot, styles.center].join(" ")} />
                <div
                  className={[styles.dot, styles.dtop, styles.dleft].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dtop, styles.dright].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dleft].join(
                    " "
                  )}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dright].join(
                    " "
                  )}
                />
              </div>
              <div
                className={[styles.side, styles.bottom, styles.inner].join(" ")}
              />
              <div className={[styles.side, styles.back].join(" ")}>
                <div
                  className={[styles.dot, styles.dtop, styles.dleft].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dtop, styles.dright].join(" ")}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dleft].join(
                    " "
                  )}
                />
                <div
                  className={[styles.dot, styles.dbottom, styles.dright].join(
                    " "
                  )}
                />
                <div
                  className={[styles.dot, styles.center, styles.dleft].join(
                    " "
                  )}
                />
                <div
                  className={[styles.dot, styles.center, styles.dright].join(
                    " "
                  )}
                />
              </div>
              <div
                className={[styles.side, styles.back, styles.inner].join(" ")}
              />
              <div
                className={[styles.side, styles.cover, styles.x].join(" ")}
              />
              <div
                className={[styles.side, styles.cover, styles.y].join(" ")}
              />
              <div
                className={[styles.side, styles.cover, styles.z].join(" ")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default DiceSpinner;
