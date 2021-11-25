import { useEffect, useState } from 'react';

export const CoffeeMaker = () => {
    const [machineIsOn, setMachineIsOn] = useState(false);
    const [hasWater, setHasWater] = useState(false);
    const [waterIsHot, setWaterIsHot] = useState(false);
    const [machineHasCoffee, setMachineHasCoffee] = useState(false);
    const [makeCoffee, setMakeCoffee] = useState(false);

    useEffect(() => {
        setUpMachine();
    })

    const startMachine = () => {
        setTimeout(() => {
            setMachineIsOn(true);
            return true
        }, 2000);
    }

    const addWater = (machineOk) => {
        machineOk &&
            setTimeout(() => {
                setHasWater(true);
            }, 2000);

    }

    const warmWatter = (water) => {
        water &&
            setTimeout(() => {
                setWaterIsHot(true);
            }, 5000);
    }

    const addCoffee = (hotWater) => {
        hotWater &&
            setTimeout(() => {
                setMachineHasCoffee(true);
            }, 5000);
    }

    const makeGreatCoffee = (machineOk, water, hotWater, coffee) => {
        console.log(machineOk, water, hotWater, coffee);
        machineOk && water && hotWater && coffee &&
            setTimeout(() => {
                setMakeCoffee(true);
            }, 5000);
    }

    const setUpMachine = async () => {
        await startMachine();
        await addWater(machineIsOn);
        await warmWatter(hasWater);
        await addCoffee(waterIsHot);
    }

    const plopCoffee = async () => {
        await makeGreatCoffee(machineIsOn, hasWater, waterIsHot, machineHasCoffee);
    }

    return (
        <div>
            <h1>Coffee Maker</h1>
            <p>{machineIsOn ? 'Machine is on 🟢 ' : 'Set On the Machine 🔴'}</p>
            <p>{hasWater ? waterIsHot ? 'Water is hot ♨️' : 'Water is heating...' : machineIsOn && 'Add Water ❗️💧'}</p>
            <p>{machineHasCoffee ? 'Machine is ready ✅ ' : waterIsHot && 'Add some coffe 🤖'}</p>
            <p>{makeCoffee ?
                <div>
                Enjoy your coffee ☕️
                
                </div>
                :
                machineHasCoffee && (
                    <div>
                        <button onClick={() => plopCoffee()}> ▶️ Make me a coffee !</button>
                    </div>)}
            </p>

        </div>
    )
}