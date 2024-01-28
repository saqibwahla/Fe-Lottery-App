"use client";
import { getCosmicLottery } from "@/app/services/api";
import { useState, useEffect } from "react";
import CircularComponent from "../common/circle";
import ParentCollapsibleComponent from "../common/colapsable/colapsable";
import styles from "./Cosmic.module.css";
const Cosmic = () => {
  const [cosmicLottery, setCosmicLottery] = useState<any>({});
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const lotteryData = await getCosmicLottery();
        setCosmicLottery(lotteryData.data);
      } catch (error) {
        console.log("server side error", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className={styles.main}>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src="/logo_Cosmic.svg" alt="Logo" width="100" height="100" />
          <p className="text-sm" style={{ color: "#961A88" }}>
            {"No." + cosmicLottery.roundNumber}
          </p>
        </div>
        <div>
          <img src="/Magnifier_plus.svg" alt="searchicon" />
        </div>
      </div>
      <div className="flex gap-3 my-3">
        <CircularComponent
          backgroundColor="#595857"
          value={15}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#595857"
          value={23}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#595857"
          value={30}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#595857"
          value={43}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#595857"
          value={61}
          textColor="#ffffff"
        />
        <CircularComponent
          backgroundColor="#961A88"
          value={6}
          textColor="#ffffff"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-sm">Winning Pot</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-xl">{cosmicLottery.winningPot}</p>
          <span className="text-sm">LUCKI</span>
        </div>
      </div>
      <div className={styles.actionBar}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-sm">
            <p className="text-sm">
              Next
              <br /> Draw
            </p>
            <img src="/watch_icon.svg" alt="searchicon" />
            <p>{cosmicLottery?.nextDraw}</p>
          </div>
          <button
            className="bg-white   px-4 rounded-sm  border"
            style={{ color: "#961A88" }}
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
                {cosmicLottery?.poolAmount?.length &&
                  cosmicLottery.poolAmount.map((pool: any) => {
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

export default Cosmic;
