"use client";
import styles from "./Classic.module.css";
import "./Classic.module.css";
import ParentCollapsibleComponent from "../common/colapsable/colapsable";
import { useState, useEffect } from "react";
import { getClassicLottery } from "@/app/services/api";
const Classic = () => {
  const [classicLottery, setClassicLottery] = useState<any>({});
  useEffect(() => {
    const fetchClassicLottery = async () => {
      try {
        const lotteryData = await getClassicLottery();
        setClassicLottery(lotteryData.data);
      } catch (error) {
        console.log("server side error", error);
      }
    };

    fetchClassicLottery();
  }, []);
  return (
    <div className={styles.main}>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src="/logo_Classic.svg" alt="Logo" width="100" height="100" />
          <p className="text-sm " style={{ color: "#191978" }}>
            Past 5 Results
          </p>
        </div>
        <div>
          <img src="/Magnifier_Minus.svg" alt="searchicon" />
        </div>
      </div>
      <div className="w-full">
        <table className="min-w-full bg-tranparent">
          <tbody className="text-sm">
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
            <tr>
              <td className="py-2 text-left">2302123</td>
              <td className="py-2 text-center">99 99 99 99 99 99 99</td>
              <td className="py-2 text-right">14,934,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-sm ">Winning Pot</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-bold">{classicLottery.winningPot}</p>
          <span className="text-sm">LUCKI</span>
        </div>
      </div>
      <div className={styles.actionBar}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-sm">
              Next
              <br /> Draw
            </p>
            <img src="/watch_icon.svg" alt="searchicon" />
            <p className="text-lg">{classicLottery?.nextDraw}</p>
          </div>
          <button
            className="bg-white   px-4 rounded-sm  border"
            style={{ color: "#191978" }}
          >
            Play
          </button>
        </div>
      </div>
      <div className="mt-14">
        <ParentCollapsibleComponent title="Current Pool Status">
          <div className="w-full">
            <table className="min-w-full bg-tranparent">
              <tbody>
                {classicLottery?.poolAmount?.length &&
                  classicLottery.poolAmount.map((pool: any) => {
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

export default Classic;
