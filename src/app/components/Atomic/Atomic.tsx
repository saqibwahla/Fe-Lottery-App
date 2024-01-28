"use client";
import { getAtomicLottery } from "@/app/services/api";
import { useState, useEffect } from "react";
import CircularComponent from "../common/circle";
import ParentCollapsibleComponent from "../common/colapsable/colapsable";
import styles from "./Atomic.module.css";
const Atomic = () => {
  const [atomicLottery, setAtomicLottery] = useState<any>({});
  useEffect(() => {
    const fetchClassicLottery = async () => {
      try {
        const lotteryData = await getAtomicLottery();
        setAtomicLottery(lotteryData.data);
      } catch (error) {
        console.log("server side error", error);
      }
    };

    fetchClassicLottery();
  }, []);
  
  return (
    <div className={styles.main}>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/logo_Atomic.svg" alt="Logo" width="100" height="100" />
          <p className="text-sm " style={{ color: "#00AEB1" }}>
            {"No." + atomicLottery.roundNumber}
          </p>
        </div>
        <div>
          <img src="/Magnifier_plus1.svg" alt="searchicon" />
        </div>
      </div>
      <div className="flex gap-3 my-3">
        <CircularComponent
          backgroundColor="#00AEB1"
          value={0}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#00AEB1"
          value={6}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#00AEB1"
          value={4}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#00AEB1"
          value={1}
          textColor="#ffffff"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-sm">Winning Pot</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-bold">{atomicLottery.winningPot}</p>
          <span className="text-sm">LUCKI</span>
        </div>
      </div>
      <div className={styles.actionBar}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-sm">
              Next <br /> Draw
            </p>
            <img src="/watch_icon.svg" alt="searchicon" />
            <p className="text-lg">142:32:01</p>
          </div>
          <button
            className="bg-white   px-4 rounded-sm  border"
            style={{ color: "#00AEB1" }}
          >
            Play
          </button>
        </div>
      </div>
      <div className="mt-14">
        <ParentCollapsibleComponent title="Current Pool Status">
          <div className="w-full">
            <table className="min-w-full bg-tranparent">
              <tbody className="text-sm">
                {atomicLottery?.poolAmount?.length &&
                  atomicLottery.poolAmount.map((pool: any) => {
                    return (
                      <tr key={pool.id}>
                        <td className="py-2 text-left">{pool.coinName}</td>
                        <td className="py-2 text-right">{pool.poolAmount}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </ParentCollapsibleComponent>
      </div>
    </div>
  );
};

export default Atomic;
