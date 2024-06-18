"use client";
import Link from "next/link";
import { Slider } from "@/components/ui/slider"
import { useState } from "react";
import { Input } from "@/components/ui/input";


export default function Home() {

    const [currAge, setCurrAge] = useState(30);
    const [retireAge, setRetireAge] = useState(60);
    const [lifeExp, setLifeExp] = useState(75);
    const [monExp, setMonExp] = useState(60000);
    const [retCorpus, setRetCorpus] = useState(0);
    const [expRet, setExpRet] = useState(9);
    const [inflation, setInflation] = useState(6);
    const [totalCorpusReq, setTotalCorpusReq] = useState(62029705);
    const [monthlyInvestReq, setMonthlyInvestReq] = useState(34791)

    return (
        <div className=" flex flex-col gap-10 p-4 w-[85%] mx-auto">
            <p className=" font-bold text-4xl ">Retirement Calculator</p>
            <div className=" flex flex-col gap-6 w-[60%] justify-start border rounded-lg shadow-sm py-4 px-6 ">
                <div className=" flex flex-row justify-between ">
                    <p>Current Age (years)</p>
                    <p>{currAge}Yr</p>
                </div>
                <Slider defaultValue={[30]} min={21} max={60} step={1} onValueChange={(value) => { setCurrAge(value[0]) }} />
                <div className=" flex flex-row justify-between ">
                    <p>Retirement Age (years)</p>
                    <p>{retireAge}Yr</p>
                </div>
                <Slider defaultValue={[60]} min={40} max={70} step={1} onValueChange={(value) => { setRetireAge(value[0]) }} />
                <div className=" flex flex-row justify-between ">
                    <p>Life Expectancy (years)</p>
                    <p>{lifeExp}Yr</p>
                </div>
                <Slider defaultValue={[75]} min={60} max={100} step={1} onValueChange={(value) => { setLifeExp(value[0]) }} />
                <div className=" flex flex-row justify-between ">
                    <p>Monthly Expenditure after Retirement</p>
                    <p>₹{monExp}</p>
                </div>
                <Slider defaultValue={[60000]} min={10000} max={1000000} step={1} onValueChange={(value) => { setMonExp(value[0]) }} />
                <div className=" flex flex-row justify-between ">
                    <p>Retirement Corpus Available</p>
                    <p>₹{retCorpus}</p>
                </div>
                <Slider defaultValue={[0]} min={0} max={10000000} step={1} onValueChange={(value) => { setRetCorpus(value[0]) }} />
                <div className=" flex flex-row gap-10 ">
                    <div className=" flex flex-col gap-3 ">
                        <p>Expected Returns from Investment (p.a)</p>
                        <div className=" flex flex-row gap-1 items-center ">
                            <Input type="number" value={expRet} onChange={(e) => { setExpRet(e.target.valueAsNumber) }} className=" text-right " />
                            <span>%</span>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-3 ">
                        <p>Inflation Rate</p>
                        <div className=" flex flex-row gap-1 items-center ">
                            <Input type="number" value={inflation} onChange={(e) => { setInflation(e.target.valueAsNumber) }} className=" text-right " />
                            <span>%</span>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 w-full bg-green-200 rounded-lg p-2 ">
                    <div className=" flex flex-row justify-between ">
                        <p>Total retirement Corpus Required</p>
                        <p>₹{Math.round((monExp*12*(lifeExp-retireAge))*(Math.pow((1+(inflation/100)),(retireAge-currAge))))}</p>
                    </div>
                    <div className=" flex flex-row justify-between ">
                        <p>Monthly Investment Required</p>
                        <p>₹{Math.round(((Math.round((monExp*12*(lifeExp-retireAge))*(Math.pow((1+(inflation/100)),(retireAge-currAge))))-retCorpus)/(((1+(expRet/100))*(Math.pow((1+(expRet/100)),(retireAge-currAge))-1))/(9/100)))/12)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
