import {Chart} from "react-google-charts";
import React from "react";
import {TransformWrapper, TransformComponent, useControls} from "react-zoom-pan-pinch";

export const data = [
    [
        {
            v: "Mike",
            f: 'Mike<div style="color:red; font-style:italic">President</div>',
        },
        "",
        "The President",
    ],
    [
        {
            v: "Jim",
            f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
        },
        "Mike",
        "VP",
    ],
    ["Alice", "Mike", ""],
    ["Bob", "Jim", "Bob Sponge"],
    ["Carol", "Bob", ""],
];

export const options = {
    allowHtml: true,
};

const Controls = () => {
    const {zoomIn, zoomOut, resetTransform} = useControls();

    return (
        <div className="rounded-md shadow-sm pt-3" role="group">
            <button type="button" onClick={() => zoomIn()}
                    className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 me-2" fill="none" viewBox="0 0 20 20"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
                Zoom In
            </button>
            <button type="button" onClick={() => zoomOut()}
                    className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 me-2" fill="none" viewBox="0 0 20 20"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"/>
                </svg>
                Zoom Out
            </button>
            <button type="button" onClick={() => resetTransform()}
                    className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path
                        d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path
                        d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                </svg>
                Reset
            </button>
        </div>
    );
};

export function OrgChart() {
    return (
        <TransformWrapper
            initialScale={1}
        >
            {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                <>
                    <Controls/>
                    <TransformComponent
                        wrapperStyle={{
                            width: "100%",
                            height: "100%",
                            border: "10px solid #ccc"
                        }}
                        contentStyle={{width: "100%", height: "100%"}}
                    >
                        <Chart
                            chartType="OrgChart"
                            data={data}
                            options={options}
                            width={'100%'}
                            height={'600px'}
                            // style={{border: '1px solid #ccc'}}
                        />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
}
