import {Chart} from "react-google-charts";

export function TlcSimple() {
    const columns = [
        {type: "string", id: "President"},
        {type: "date", id: "Start"},
        {type: "date", id: "End"},
    ];

    const rows = [
        ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
    ];

    const data = [columns, ...rows];
    return (
        <>
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Simple</h2>
            <Chart chartType="Timeline" data={data} width="100%" height="400px"/>
        </>
    );
}
