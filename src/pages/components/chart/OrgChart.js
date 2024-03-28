import {Chart} from "react-google-charts";
import React from "react";
import {TransformWrapper, TransformComponent, useControls} from "react-zoom-pan-pinch";

export const data = [
    ['Name', 'Manager', 'Tooltip'],
    [{v: '1', f: 'John Doe'}, '', ''],
    [{v: '2', f: 'Jane Smith'}, '1', ''],
    [{v: '3', f: 'Alice Johnson'}, '2', ''],
    [{v: '4', f: 'Michael Brown'}, '2', ''],
    [{v: '5', f: 'Emily Wilson'}, '4', ''],
    [{v: '6', f: 'David Lee'}, '1', ''],
    [{v: '7', f: 'Sarah Davis'}, '6', ''],
    [{v: '8', f: 'Chris Evans'}, '6', ''],
    [{v: '9', f: 'Lisa Martinez'}, '8', ''],
    [{v: '10', f: 'Matthew Taylor'}, '8', ''],
    [{v: '11', f: 'Mark Anderson'}, '1', ''],
    [{v: '12', f: 'Laura Garcia'}, '11', ''],
    [{v: '13', f: 'Steven Rodriguez'}, '11', ''],
    [{v: '14', f: 'Karen Hernandez'}, '13', ''],
    [{v: '15', f: 'Andrew Thompson'}, '13', ''],
    [{v: '16', f: 'Michelle White'}, '1', ''],
    [{v: '17', f: 'Richard Martinez'}, '16', ''],
    [{v: '18', f: 'Susan Taylor'}, '16', ''],
    [{v: '19', f: 'James Clark'}, '18', ''],
    [{v: '20', f: 'Daniel Lewis'}, '18', ''],
    [{v: '21', f: 'Patricia Adams'}, '1', ''],
    [{v: '22', f: 'Christopher Baker'}, '21', ''],
    [{v: '23', f: 'Elizabeth Young'}, '21', ''],
    [{v: '24', f: 'Justin Wright'}, '23', ''],
    [{v: '25', f: 'Rebecca King'}, '23', ''],
    [{v: '26', f: 'Nicole Hill'}, '24', ''],
    [{v: '27', f: 'Amanda Scott'}, '24', ''],
    [{v: '28', f: 'Kevin Green'}, '1', ''],
    [{v: '29', f: 'Stephanie Carter'}, '28', ''],
    [{v: '30', f: 'Nathan Turner'}, '28', ''],
    [{v: '31', f: 'Angela Morris'}, '30', ''],
    [{v: '32', f: 'William Hall'}, '31', ''],
    [{v: '33', f: 'Brian Moore'}, '31', ''],
    [{v: '34', f: 'Linda Perez'}, '33', ''],
    [{v: '35', f: 'Jonathan Rivera'}, '33', ''],
    [{v: '36', f: 'Ashley Mitchell'}, '1', ''],
    [{v: '37', f: 'Joseph Brooks'}, '36', ''],
    [{v: '38', f: 'Diana Nelson'}, '36', ''],
    [{v: '39', f: 'Scott Cooper'}, '38', ''],
    [{v: '40', f: 'Kimberly Ward'}, '38', ''],
    [{v: '41', f: 'Joshua Gonzales'}, '40', ''],
    [{v: '42', f: 'Mary Bailey'}, '40', ''],
    [{v: '43', f: 'Benjamin Hughes'}, '1', ''],
    [{v: '44', f: 'Carol Foster'}, '43', ''],
    [{v: '45', f: 'Eric Cox'}, '43', ''],
    [{v: '46', f: 'Ronald Murphy'}, '45', ''],
    [{v: '47', f: 'Tiffany Reed'}, '45', ''],
    [{v: '48', f: 'Jacob Sanders'}, '47', ''],
    [{v: '49', f: 'Deborah Ross'}, '47', ''],
    [{v: '50', f: 'Jeffrey Simmons'}, '1', ''],
    [{v: '51', f: 'Paula Bryant'}, '50', ''],
    [{v: '52', f: 'Jesse Long'}, '50', ''],
    [{v: '53', f: 'Sandra Wood'}, '52', ''],
    [{v: '54', f: 'Anthony Torres'}, '52', ''],
    [{v: '55', f: 'Cynthia Price'}, '54', ''],
    [{v: '56', f: 'Gary Ramirez'}, '54', ''],
    [{v: '57', f: 'Heather Peterson'}, '56', ''],
    [{v: '58', f: 'Kyle Morris'}, '1', ''],
    [{v: '59', f: 'Martha Russell'}, '58', ''],
    [{v: '60', f: 'Jeremy Ward'}, '58', ''],
    [{v: '61', f: 'Dennis Morgan'}, '60', ''],
    [{v: '62', f: 'Teresa Coleman'}, '60', ''],
    [{v: '63', f: 'Julie Simmons'}, '62', ''],
    [{v: '64', f: 'Phillip Rivera'}, '62', ''],
    [{v: '65', f: 'Emily Baker'}, '64', ''],
    [{v: '66', f: 'Lori Watson'}, '64', ''],
    [{v: '67', f: 'Aaron Perry'}, '1', ''],
    [{v: '68', f: 'Rebecca Henderson'}, '67', ''],
    [{v: '69', f: 'Carl Brooks'}, '67', ''],
    [{v: '70', f: 'Anna James'}, '69', ''],
    [{v: '71', f: 'Todd Sanchez'}, '69', ''],
    [{v: '72', f: 'Christine Hughes'}, '71', ''],
    [{v: '73', f: 'Adam Price'}, '1', ''],
    [{v: '74', f: 'Julia Reed'}, '73', ''],
    [{v: '75', f: 'Stephen Jenkins'}, '73', ''],
    [{v: '76', f: 'Ruth Cook'}, '75', ''],
    [{v: '77', f: 'Justin Rivera'}, '75', ''],
    [{v: '78', f: 'Kathleen Scott'}, '77', ''],
    [{v: '79', f: 'Bobby Bell'}, '77', ''],
    [{v: '80', f: 'Sharon Peterson'}, '1', ''],
    [{v: '81', f: 'Billy Stewart'}, '80', ''],
    [{v: '82', f: 'Diane Ward'}, '80', ''],
    [{v: '83', f: 'Ryan Flores'}, '82', ''],
    [{v: '84', f: 'Amber Coleman'}, '82', ''],
    [{v: '85', f: 'Patrick Watson'}, '84', ''],
    [{v: '86', f: 'Robin Barnes'}, '84', ''],
    [{v: '87', f: 'Lori Henderson'}, '86', ''],
    [{v: '88', f: 'Terry Turner'}, '86', ''],
    [{v: '89', f: 'Alexander Wood'}, '88', ''],
    [{v: '90', f: 'Kathy Adams'}, '88', ''],
    [{v: '91', f: 'Wayne Murphy'}, '1', ''],
    [{v: '92', f: 'Carolyn Richardson'}, '91', ''],
    [{v: '93', f: 'Carlton Price'}, '91', ''],
    [{v: '94', f: 'Joyce Cooper'}, '93', ''],
    [{v: '95', f: 'Bruce Roberts'}, '93', ''],
    [{v: '96', f: 'Janet Nelson'}, '95', ''],
    [{v: '97', f: 'Terry Rivera'}, '95', ''],
    [{v: '98', f: 'Marie Thompson'}, '97', ''],
    [{v: '99', f: 'Jacob Gonzales'}, '97', ''],
    [{v: '100', f: 'Samantha Ward'}, '99', '']
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
                Zoom In
            </button>
            <button type="button" onClick={() => zoomOut()}
                    className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 me-2" fill="none" viewBox="0 0 20 20"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
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

export default function OrgChart() {
    return (
        <TransformWrapper
            centerOnInit={true}
            centerZoomedOut={true}
            initialScale={1}
            wheel={{wheelDisabled: true}}
        >
            {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                <>
                    <Controls/>
                    <TransformComponent
                        wrapperStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                        wrapperClass={'border-2 border-black-500'}
                        contentStyle={{width: "100%", height: "100%"}}
                    >
                        <Chart
                            chartType="OrgChart"
                            data={data}
                            options={options}
                            width={'100%'}
                            height={'600px'}
                            style={{overflowY: 'scroll'}}
                        />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
}
